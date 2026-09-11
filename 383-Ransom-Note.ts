function canConstruct(ransomNote: string, magazine: string): boolean {
    const freqCount = new Array(26).fill(0);

    for (const c of magazine) {
        const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
        freqCount[idx]++;
    }

    for (const c of ransomNote) {
        const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
        freqCount[idx]--;
        if (freqCount[idx] < 0) return false;
    }
    return true;
};