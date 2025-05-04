function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const freq = new Array(26).fill(0);
        for (const char of str) {
            freq[char.charCodeAt(0) - 97]++;
        }

        const key = freq.join('#');

        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return [...map.values()]
};