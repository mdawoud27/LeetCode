1function isAnagram(s: string, t: string): boolean {
2    if (s.length !== t.length) return false;
3
4    // const map = new Map<string, number>();
5
6    // for (const char of s) {
7    //     map.set(char, (map.get(char) ?? 0) + 1);
8    // }
9
10    // for (const char of t) {
11    //     map.set(char, (map.get(char) ?? -1) - 1);
12    // }
13
14    // for (const [key, value] of map) {
15    //     if (value) return false;
16    // }     o(n)
17
18    // another approach
19    const freq1: number[] = new Array(26).fill(0);
20    const freq2: number[] = new Array(26).fill(0);
21
22    for (let i = 0; i < s.length; i++) {
23        freq1[s[i].charCodeAt(0) - 97] += 1;
24    }
25    
26    for (let i = 0; i < t.length; i++) {
27        freq2[t[i].charCodeAt(0) - 97] += 1;
28    }
29
30    const code1 = freq1.join('#');
31    const code2 = freq2.join('#');
32
33
34    return code1 === code2;
35};