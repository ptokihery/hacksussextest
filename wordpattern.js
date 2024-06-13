import { exec } from "child_process"

export function wordPattern(pattern, s) {
    const words = s.split(' ');

    if (pattern == "" &&  s == "") return true
    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (patternToWord.has(p)) {
            if (patternToWord.get(p) !== w) {
                return false;
            }
        } else {
            patternToWord.set(p, w);
        }

        if (wordToPattern.has(w)) {
            if (wordToPattern.get(w) !== p) {
                return false;
            }
        } else {
            wordToPattern.set(w, p);
        }
    }

    return true;
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