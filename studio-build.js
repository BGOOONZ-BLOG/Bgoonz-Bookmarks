const path = require('path');
const childProcess = require('child_process');

let hookBody = process.env.INCOMING_HOOK_BODY;
let commitRef = process.env.COMMIT_REF;
let initialRef = process.argv[2]

try {
    if (hookBody) {
        const obj = JSON.parse(hookBody);
        if (obj && obj.buildType === "content-only") {
            console.log("Sanity studio build: content-only change, skipping studio deploy");
            process.exit(0);
        }
    }
} catch(err) {
    console.error("Sanity studio build: Failed to parse hook body", hookBody);
}

if (initialRef && commitRef && commitRef === initialRef) {
    console.log("Initial project build: Skipping Sanity studio deploy");
    process.exit(0);
}

console.log("Sanity studio build: Rebuilding studio");
childProcess.spawnSync('npm install && npm run deploy && npm run clean', [], {
    cwd: path.join(__dirname, 'studio'),
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: true
});
console.log("Sanity studio build: studio built");