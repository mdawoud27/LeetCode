1function isPalindrome(s: string): boolean {
2    let l: number = 0;
3    let r: number = s.length - 1;
4
5    const isAlphaNum = (c: string) => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';
6
7    while (l < r) {
8        while (l < r && !isAlphaNum(s[l])) l++; 
9        while (l < r && !isAlphaNum(s[r])) r--; 
10
11        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
12        l++;
13        r--;
14    }
15    return true;
16};