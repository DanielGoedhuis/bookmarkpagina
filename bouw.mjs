// Maakt van de leesbare bron/index.html een verkleinde index.html (sneller laden).
// Gebruik: npm install && npm run bouw
import { readFile, writeFile } from "node:fs/promises";
import { minify } from "html-minifier-terser";

const bron = await readFile(new URL("./bron/index.html", import.meta.url), "utf8");
const klein = await minify(bron, {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: { toplevel: true, compress: { passes: 2 }, mangle: true, format: { comments: false } }
});
await writeFile(new URL("./index.html", import.meta.url), klein);
console.log(`bron/index.html ${(bron.length / 1024).toFixed(0)} kB → index.html ${(klein.length / 1024).toFixed(0)} kB`);
