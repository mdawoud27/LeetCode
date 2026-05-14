1function groupAnagrams(strs: string[]): string[][] {
2    if (strs.length === 1) return [strs];
3
4    const map = new Map<string, string[]>();
5    const result: string[][] = [];
6
7    for (const str of strs) {
8        const code = genCodeOfStr(str);
9
10        if (!map.has(code)) map.set(code, []);
11        map.get(code).push(str);
12    }
13
14    for (const [key, value] of map) {
15        result.push(value);
16    }
17
18    return result;
19};
20
21function genCodeOfStr(str: string): string {
22    const freq: number[] = new Array(26).fill(0);
23
24    for (let i = 0; i < str.length; i++) {
25        freq[str[i].charCodeAt(0) - 97] += 1;
26    }
27
28    const strCode = freq.join('#');
29
30    return strCode;
31}