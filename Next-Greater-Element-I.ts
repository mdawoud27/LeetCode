1function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
2    // Approach 1
3    // const ans: number[] = [];
4
5    // for (const n of nums1) {
6    //     const index = nums2.indexOf(n);
7
8    //     let nextGreater = -1;
9    //     for (let i = index + 1; i < nums2.length; i++) {
10    //         if (nums2[i] > n) { 
11    //             nextGreater = nums2[i]; 
12    //             break; 
13    //         }
14    //     }
15    //     ans.push(nextGreater);
16    // }
17    // return ans; // O(n^2)
18
19    // Stack approach
20    const stack: number[] = [];
21    const map = new Map<number, number>();
22
23    for (const num of nums2) {
24        while (stack.length && num > stack[stack.length - 1]) {
25            map.set(stack.pop(), num);
26        }
27
28        stack.push(num);
29    }
30
31    while (stack.length) map.set(stack.pop(), -1);
32
33    return nums1.map(num => map.get(num));
34
35    // O(n)
36};