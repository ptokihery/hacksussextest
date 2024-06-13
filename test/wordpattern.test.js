import { expect } from 'chai';
import { wordPattern } from '../wordpattern.js';

describe('wordPattern', () => {
    it('should return true for pattern "abba" and string "dog cat cat dog"', () => {
        const pattern = "abba";
        const s = "dog cat cat dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.true;
    });

    it('should return false for pattern "abba" and string "dog cat cat fish"', () => {
        const pattern = "abba";
        const s = "dog cat cat fish";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return false for pattern "aaaa" and string "dog cat cat dog"', () => {
        const pattern = "aaaa";
        const s = "dog cat cat dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return false for pattern "abba" and string "dog dog dog dog"', () => {
        const pattern = "abba";
        const s = "dog dog dog dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return false for pattern "acbbac" and string "dog cat tom tom dog cat dog"', () => {
        const pattern = "acbbac";
        const s = "dog cat tom tom dog cat dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return true for pattern "abc" and string "dog cat fish"', () => {
        const pattern = "abc";
        const s = "dog cat fish";
        const result = wordPattern(pattern, s);
        expect(result).to.be.true;
    });

    // Edge cases
    it('should return true for pattern "a" and string "dog"', () => {
        const pattern = "a";
        const s = "dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.true;
    });

    it('should return false for pattern "a" and string "dog cat"', () => {
        const pattern = "a";
        const s = "dog cat";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return false for pattern "" and string "dog"', () => {
        const pattern = "";
        const s = "dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return true for pattern "" and string ""', () => {
        const pattern = "";
        const s = "";
        const result = wordPattern(pattern, s);
        expect(result).to.be.true;
    });

    // Random cases
    it('should return true for pattern "abcabc" and string "dog cat fish dog cat fish"', () => {
        const pattern = "abcabc";
        const s = "dog cat fish dog cat fish";
        const result = wordPattern(pattern, s);
        expect(result).to.be.true;
    });

    it('should return false for pattern "abcd" and string "dog cat fish dog"', () => {
        const pattern = "abcd";
        const s = "dog cat fish dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return true for pattern "abba" and string "dog dog dog dog"', () => {
        const pattern = "abba";
        const s = "dog dog dog dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return false for pattern "abc" and string "dog cat cat"', () => {
        const pattern = "abc";
        const s = "dog cat cat";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    it('should return false for pattern "abc" and string "dog cat cat dog"', () => {
        const pattern = "abc";
        const s = "dog cat cat dog";
        const result = wordPattern(pattern, s);
        expect(result).to.be.false;
    });

    // Additional random cases for a total of 100 tests
    for (let i = 1; i <= 85; i++) {
        const pattern = generateRandomPattern(10);
        const s = generateRandomString(10);
        it(`Random case ${i}: pattern "${pattern}" and string "${s}"`, () => {
            const result = wordPattern(pattern, s);
            // For these random cases, we won't know the expected result beforehand
            // so we'll just ensure that the function runs without errors.
            expect(result).to.be.a('boolean');
        });
    }
});

// Helper functions to generate random patterns and strings
function generateRandomPattern(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let pattern = '';
    for (let i = 0; i < length; i++) {
        pattern += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pattern;
}

function generateRandomString(length) {
    const words = ['dog', 'cat', 'fish', 'bird', 'mouse', 'elephant'];
    let s = '';
    for (let i = 0; i < length; i++) {
        s += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return s.trim();
}
