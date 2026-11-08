class Solution:
    def trap(self, height: list[int]) -> int:
        if not height: return 0

        left, right = 0, len(height) - 1
        left_max, right_max = 0, 0

        water_amount = 0

        while left < right:
            if height[left] <= height[right]:
                left_max = max(left_max, height[left])
                water_amount += left_max - height[left]
                left += 1
            else:
                right_max = max(right_max, height[right])
                water_amount += right_max - height[right]
                right -= 1
        return water_amount