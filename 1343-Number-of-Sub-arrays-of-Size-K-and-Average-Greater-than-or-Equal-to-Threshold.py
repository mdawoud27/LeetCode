class Solution:
    def numOfSubarrays(self, arr: list[int], k: int, threshold: int) -> int:
        count = 0
        window_sum = 0

        for i in range(len(arr)):
            window_sum += arr[i]

            if i >= k - 1:
                if window_sum >= k * threshold:
                    count += 1
                window_sum -= arr[i - k + 1]

        return count

