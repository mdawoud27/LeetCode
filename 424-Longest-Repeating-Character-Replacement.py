class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        left, max_freq, max_len = 0, 0, 0

        for right in range(len(s)):
            char = s[right]
            count[char] = count.get(char, 0) + 1

            max_freq = max(max_freq, count[char])

            while (right - left + 1) - max_freq > k:
                left_char = s[left]
                count[left_char] -= 1
                left += 1

            max_len = max(max_len, right - left + 1)

        return max_len