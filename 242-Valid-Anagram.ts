function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map = new Map<string, number>();

    for (const c of s) map.set(c, (map.get(c) ?? 0) + 1);
    for (const c of t) map.set(c, (map.get(c) ?? 0) - 1);

    return [...map.values()].every(v => v === 0);
};