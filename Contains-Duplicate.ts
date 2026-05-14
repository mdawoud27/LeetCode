1function containsDuplicate(nums: number[]): boolean {
2    const map = new Map<number, number>();
3
4    for (const num of nums) {
5        map.set(num, (map.get(num) ?? 0) + 1);
6        if (map.get(num) > 1) return true;
7    }
8
9    return false;
10};