1function kClosest(points: number[][], k: number): number[][] {
2    const result = new Map<number[], number>();
3
4    for (const point of points) {
5        result.set(point, calcDistanceToOrgin(point));
6    }
7
8    const sorted = [...result.entries()].sort((a, b) => a[1] - b[1]);
9
10    const res: number[][] = [];
11
12    for (const [point] of sorted) {
13        res.push(point);
14
15        if (res.length === k) {
16            break;
17        }
18    }
19    return res;
20};
21
22function calcDistanceToOrgin(point: number[]): number {
23    const [x, y] = point;
24    return x * x + y * y;
25}