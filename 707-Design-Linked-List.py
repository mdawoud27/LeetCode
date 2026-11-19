class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class MyLinkedList:

    def __init__(self):
        self.size = 0
        self.head: ListNode = None
        self.tail: ListNode = None

    def get(self, index: int) -> int:
        if not self.isValid(index):
            return -1

        current: ListNode = self.head
        i = 0
        while i < index:
            current = current.next
            i += 1
        return current.val

    def addAtHead(self, val: int) -> None:
        node = ListNode(val)

        if self.size == 0:
            self.head = node
            self.tail = node
            self.size += 1
            return

        node.next = self.head
        self.head = node
        self.size += 1

    def addAtTail(self, val: int) -> None:
        node = ListNode(val)

        if self.size == 0:
            self.head = node
            self.tail = node
            self.size += 1
            return

        self.tail.next = node
        self.tail = node
        self.size += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.size:
            return

        if index == 0:
            self.addAtHead(val)
            return

        if index == self.size:
            self.addAtTail(val)
            return

        node = ListNode(val)
        current = self.head
        i = 0

        while i < index - 1:
            current = current.next
            i += 1

        node.next = current.next
        current.next = node
        self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if not self.isValid(index):
            return

        if index == 0:
            self.head = self.head.next
            self.size -= 1

            if self.size == 0:
                self.tail = None
            return

        current = self.head
        i = 0

        while i < index - 1:
            current = current.next
            i += 1

        target = current.next
        current.next = target.next

        if target == self.tail:
            self.tail = current
        self.size -= 1

    def isValid(self, index):
        return 0 <= index < self.size


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
