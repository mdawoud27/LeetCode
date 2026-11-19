class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        my_dict = {}

        for num in nums:
            my_dict[num] = my_dict.get(num, 0) + 1

            if my_dict[num] > 1:
                return num
        return -1
