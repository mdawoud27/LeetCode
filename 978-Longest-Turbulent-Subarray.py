class Solution:
    def maxTurbulenceSize(self, arr: list[int]) -> int:
        up, down, result = 1, 1, 1

        for i in range(1, len(arr)):
            if arr[i] > arr[i - 1]:
                up = down + 1
                down = 1
            elif arr[i] < arr[i - 1]:
                down = up + 1
                up = 1
            else:
                up = 1
                down = 1
            result = max(result, up, down)
        return result
