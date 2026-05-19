1function isNStraightHand(hand: number[], groupSize: number): boolean {
2    if (hand.length % groupSize !== 0) return false;
3
4    const map = new Map<number, number>();
5
6    for (const num of hand) {
7        map.set(num, (map.get(num) ?? 0) + 1);
8    }
9
10    const sortedKeys = [...map.keys()].sort((a, b) => a - b);
11
12    for (const num of sortedKeys) {
13        const count = map.get(num);
14
15        while (map.get(num) > 0) {
16            for (let i = 0; i < groupSize; i++) {
17                const current = num + i;
18
19                if (!map.has(current) || map.get(current) === 0) {
20                    return false;
21                }
22
23                map.set(current, map.get(current) - 1);
24            }
25        }
26    }
27
28    return true;
29};