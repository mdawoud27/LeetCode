function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let maxLen = 0;
    let left = 0;
    const map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map.has(c) && map.get(c) >= left) {
            left = map.get(c) + 1;
        }
        map.set(c, i);
        maxLen = Math.max(maxLen, i - left + 1);
    }

    return maxLen;
};