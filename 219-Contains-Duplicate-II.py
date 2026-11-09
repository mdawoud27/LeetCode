class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        window = set()

        for i, num in enumerate(nums):
            if num in window:
                return True
            
            window.add(num)

            if i >= k:
                window.remove(nums[i - k])

        return False

        