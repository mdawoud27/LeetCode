1function topKFrequent(nums: number[], k: number): number[] {
2    const map = new Map<number, number>();
3    const ans: number[] = [];
4
5    for (const num of nums) {
6        if (map.has(num)) map.set(num, map.get(num)! + 1);
7        else map.set(num, 1);
8    }
9
10    const result = [...map.entries()].sort((a, b) => b[1] - a[1]);
11
12    for (const [key] of result) {
13        if (k--) ans.push(key);
14        else break;
15    }
16    return ans;
17}