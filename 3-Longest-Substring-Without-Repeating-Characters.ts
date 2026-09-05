function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    let left = 0;
    const seen = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        const c = s[right];

        if (seen.has(c) && seen.get(c) >= left) {
            left = seen.get(c) + 1;
        }

        seen.set(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};