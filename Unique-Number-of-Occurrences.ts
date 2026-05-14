1function uniqueOccurrences(arr: number[]): boolean {
2    const map = new Map<number, number>();
3
4    for (const num of arr) {
5        map.set(num, (map.get(num) ?? 0) + 1);
6    }
7
8    const set = new Set<number>([...map.values()]);
9    return set.size === map.size;
10};