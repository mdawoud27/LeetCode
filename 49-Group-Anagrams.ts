function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return [];

    const answer: string[][] = [];
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const maskKey = genMask(str);

        if (!map.has(maskKey)) map.set(maskKey, []);
        map.get(maskKey).push(str);
    }

    for (const [key, value] of map) {
        answer.push(value);
    }

    return answer;
};

function genMask(str: string): string {
    const mask = new Array(26).fill(0);

    for (const c of str) {
        const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        mask[index]++;
    }
    return mask.join('#');
}