class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        count = {}
        for char in s1:
            count[char] = count.get(char, 0) + 1

        window_count = {}
        for i in range(len(s1)):
            char = s2[i]
            window_count[char] = window_count.get(char, 0) + 1

        if window_count == count:
            return True

        for i in range(len(s1), len(s2)):
            char = s2[i]
            window_count[char] = window_count.get(char, 0) + 1

            char = s2[i - len(s1)]
            window_count[char] -= 1

            if window_count[char] == 0:
                del window_count[char]

            if window_count == count:
                return True

        return False
