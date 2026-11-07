class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        stack = []
        max_area = 0

        heights.append(0)

        for i in range(len(heights)):
            while stack and heights[stack[-1]] > heights[i]:
                index = stack.pop()

                height = heights[index]

                if not stack:
                    width = i
                else:
                    width = i - stack[-1] - 1

                area = height * width
                max_area = max(max_area, area)
            
            stack.append(i)
        return max_area

        