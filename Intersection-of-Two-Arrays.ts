function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    return [... new Set([...set1].filter(num => set2.has(num)))];
};