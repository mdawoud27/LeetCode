1function isAlienSorted(words: string[], order: string): boolean {
2    const orderMap = new Map<string, number>();
3
4    for (let i = 0; i < order.length; i++) {
5        orderMap.set(order[i], i);
6    }
7
8    for (let i = 0; i < words.length - 1; i++) {
9        const w1 = words[i];
10        const w2 = words[i + 1];
11        let foundDiff = false;
12
13        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
14            const c1 = orderMap.get(w1[j]);
15            const c2 = orderMap.get(w2[j]);
16
17            if (c1 > c2) return false;
18            if (c1 < c2) {
19                foundDiff = true;
20                break;
21            }
22        }
23        if (!foundDiff && w1.length > w2.length) return false;
24    }
25    return true;
26};