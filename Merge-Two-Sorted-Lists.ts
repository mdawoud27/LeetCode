1/**
2 * Definition for singly-linked list.
3 * class ListNode {
4 *     val: number
5 *     next: ListNode | null
6 *     constructor(val?: number, next?: ListNode | null) {
7 *         this.val = (val===undefined ? 0 : val)
8 *         this.next = (next===undefined ? null : next)
9 *     }
10 * }
11 */
12
13function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
14    if (!list1) return list2
15    if (!list2) return list1
16
17    const dummy = new ListNode(-1);
18    let tail = dummy;
19
20    let ptr1: ListNode | null = list1;
21    let ptr2: ListNode | null = list2;
22
23    while (ptr1 && ptr2) {
24        if (ptr1.val <= ptr2.val) {
25            tail.next = ptr1;
26            ptr1 = ptr1.next;
27        } else {
28            tail.next = ptr2;
29            ptr2 = ptr2.next;
30        }
31        tail = tail.next;
32    }
33
34    if (ptr1) tail.next = ptr1;
35    if (ptr2) tail.next = ptr2;
36
37    return dummy.next;
38};