1function groupAnagrams(strs: string[]): string[][] {
2    if (strs.length === 1) return [strs];
3
4    const map = new Map<string, string[]>();
5
6    for (const str of strs) {
7        const code = genCodeOfStr(str);
8
9        if (!map.has(code)) map.set(code, []);
10        map.get(code).push(str);
11    }
12
13    return [...map.values()];
14};
15
16function genCodeOfStr(str: string): string {
17    const freq: number[] = new Array(26).fill(0);
18
19    for (let i = 0; i < str.length; i++) {
20        freq[str[i].charCodeAt(0) - 97] += 1;
21    }
22
23    const strCode = freq.join('#');
24
25    return strCode;
26}