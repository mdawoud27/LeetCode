1function twoSum(nums: number[], target: number): number[] {
2    const ans = {};
3
4    for (let i = 0; i < nums.length; i++) {
5        const temp = target - nums[i];
6
7        if (ans.hasOwnProperty(temp)) return [i, ans[temp]];
8        ans[nums[i]] = i;
9    }
10    return [];
11};