1function isPalindrome(s: string): boolean {
2    let i = 0;
3    let j = s.length - 1;
4
5    const isAlphaNum = (c: string) => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';
6
7    while (i < j) {
8        while (i < j && !isAlphaNum(s[i])) i++;
9        while (i < j && !isAlphaNum(s[j])) j--;
10
11        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
12
13        i++;
14        j--;
15    }
16    return true;
17};