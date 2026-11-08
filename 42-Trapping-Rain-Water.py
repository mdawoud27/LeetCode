class Solution:
    def trap(self, height: list[int]) -> int:
        left_max = [0] * len(height)
        right_max = [0] * len(height)

        left_max[0] = height[0]
        for i in range(1, len(height)):
            left_max[i] = max(left_max[i - 1], height[i])

        right_max[-1] = height[-1]
        for i in range(len(height) - 2, -1, -1):
            right_max[i] = max(right_max[i + 1], height[i])

        water_amount = 0
        for i in range(len(height)):
            water_amount += min(left_max[i], right_max[i]) - height[i]
        
        return water_amount