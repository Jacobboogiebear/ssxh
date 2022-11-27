const { existsSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// REPLIT : REPL_IDENTITY
// GLITCH : API_SERVER_EXTERNAL

let PLATFORM;

if (process.env['REPL_IDENTITY'] != undefined) {
    PLATFORM = "REPLIT";
} else if (process.env['API_SERVER_EXTERNAL'] != undefined) {
    PLATFORM = "GLITCH";
};

if (!existsSync(path.join(process.cwd(), './service/node_modules/'))) {
    execSync("npm install", { 
        cwd: path.join(process.cwd(), "./service/")
    });
}

execSync("node index.js", {
    cwd: path.join(process.cwd(), './service/')
})