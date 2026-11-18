# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode | None) -> ListNode | None:
        prev, current, next = None, head, None

        while current:
            next = current.next
            current.next = prev

            prev = current
            current = next

        return prev
