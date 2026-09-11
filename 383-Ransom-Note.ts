function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();

    for (const c of ransomNote) map.set(c, (map.get(c) ?? 0) + 1);
    for (const c of magazine) {
        if (map.has(c) && map.get(c) > 0) {
            map.set(c, (map.get(c) ?? 0) - 1);
        }
    }

    return [...map.values()].every(v => v === 0);
};