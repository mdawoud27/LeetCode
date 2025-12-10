1function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
2    return word1.join('') === word2.join('');
3};
4/**
5    time: O(n1 + n2)
6    space: O(n1 + n2)
7 */