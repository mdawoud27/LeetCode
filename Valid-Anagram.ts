function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map = new Map<string, number>();

    for (const char of s) {
        if (!map.has(char)) map.set(char, 0);
        map.set(char, map.get(char) + 1);
    }

    for (const char of t) {
        if (map.has(char)) map.set(char, map.get(char) - 1);
    }

    for (const key of map.keys()) {
        if (map.get(key)) return false;
    }
    return true;
};