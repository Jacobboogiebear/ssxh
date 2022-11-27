const { mkdirSync, existsSync, rmSync, readFileSync, read, fstat, writeFileSync } = require('fs');
const { execSync } = require('child_process');

// REPLIT : REPL_IDENTITY
// GLITCH : API_SERVER_EXTERNAL

let PLATFORM;

if (process.env['REPL_IDENTITY'] != undefined) {
    PLATFORM = "REPLIT";
} else if (process.env['API_SERVER_EXTERNAL'] != undefined) {
    PLATFORM = "GLITCH";
};

console.log(process.cwd(), PLATFORM);

// if (!existsSync("./service/")) {

// }