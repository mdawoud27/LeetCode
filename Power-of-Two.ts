1function isPowerOfTwo(n: number): boolean {
2    return n > 0 && (n & (n - 1)) === 0;
3};