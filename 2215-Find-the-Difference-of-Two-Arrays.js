/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [];
  let ans1 = new Set();
  let ans2 = new Set();

  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (let num of set1) {
    if (!set2.has(num)) ans1.add(num);
  }

  for (let num of set2) {
    if (!set1.has(num)) ans2.add(num);
  }

  answer.push([...ans1]);
  answer.push([...ans2]);

  return answer;
};