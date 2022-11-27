const { mkdirSync, existsSync, rmSync, readFileSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');
if (existsSync("dist/")) {
    rmSync("dist", { recursive: true, force: true });
}
mkdirSync("dist/");
if (existsSync("dist/.cache/")) {
    rmSync("dist/.cache/", { recursive: true, force: true });
}
mkdirSync("dist/.cache/");
execSync("browserify --require socket.io-client --outfile dist/.cache/packages.js");
execSync("parcel build --target buildcache");
let index = readFileSync("dist/.cache/index.js", 'ascii');
let packages = readFileSync("dist/.cache/packages.js", 'ascii');
let output = `{var ${packages}var module={exports:{}};{${index}}window.ssxh=module.exports}`;
writeFileSync("dist/.cache/bundled.js", output, 'ascii');
execSync("babel dist/.cache/bundled.js --out-file dist/.cache/babeld.js --presets=@babel/preset-env");
execSync("uglifyjs --compress --mangle --output dist/ssxh.js dist/.cache/babeld.js")
if (existsSync("dist/.cache/")) {
    rmSync("dist/.cache/", { recursive: true, force: true });
}