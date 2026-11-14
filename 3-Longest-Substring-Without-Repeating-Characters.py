class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        left, max_len = 0, 0

        for right in range(len(s)):
            char = s[right]

            if char in char_map:
                left = max(left, char_map[char] + 1)

            char_map[char] = right
            max_len = max(max_len, right - left + 1)

        return max_len
        