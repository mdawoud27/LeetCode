function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();

    for (const c of ransomNote) {
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    for (const c of magazine) {
        if (map.has(c)) {
            const count = map.get(c)! - 1;

            if (count < 0) {
                continue;
            }

            map.set(c, count);
        }
    }

    return [...map.values()].every(v => v === 0);
}