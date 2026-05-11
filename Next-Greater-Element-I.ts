1function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
2    const ans: number[] = [];
3
4    for (const n of nums1) {
5        const index = nums2.indexOf(n);
6
7        let nextGreater = -1;
8        for (let i = index + 1; i < nums2.length; i++) {
9            if (nums2[i] > n) { 
10                nextGreater = nums2[i]; 
11                break; 
12            }
13        }
14        ans.push(nextGreater);
15    }
16    return ans;
17};