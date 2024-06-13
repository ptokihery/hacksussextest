import { exec } from "child_process"

export function wordPattern(pattern, s) {

}

// If this script is run directly, execute `npm test`
if (import.meta.url === `file://${process.argv[1]}`) {
    exec('npm test', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing tests: ${error.message}`);
            console.error(stderr);
            return;
        }
        console.log(stdout);
    });
}