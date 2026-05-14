1function isAnagram(s: string, t: string): boolean {
2    if (s.length !== t.length) return false;
3
4    const map = new Map<string, number>();
5
6    for (const char of s) {
7        map.set(char, (map.get(char) ?? 0) + 1);
8    }
9
10    for (const char of t) {
11        map.set(char, (map.get(char) ?? -1) - 1);
12    }
13
14    for (const [key, value] of map) {
15        if (value) return false;
16    }
17    return true;
18};