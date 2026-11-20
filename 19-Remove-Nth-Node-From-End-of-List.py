# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head):
        prev = None
        current = head

        while current:
            next_node = current.next
            current.next = prev

            prev = current
            current = next_node
        return prev

    def removeAtIndex(self, head, index):
        if not head or index < 0:
            return head

        if index == 0:
            return head.next

        current = head

        for _ in range(index - 1):
            if not current.next:
                return head
            current = current.next

        if not current.next:
            return head

        current.next = current.next.next

        return head

    def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
        if not head or not head.next: return None

        # reverse the list
        reversed_list = self.reverseList(head)

        # remove the target node
        ans = self.removeAtIndex(reversed_list, n-1) 

        # reverse the list again and return
        return self.reverseList(ans)
        
        