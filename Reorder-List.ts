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
13/**
14 Do not return anything, modify head in-place instead.
15 */
16function reorderList(head: ListNode | null): void {
17    if (!head || !head.next) return;
18
19    // 1. find the middle
20    let slow: ListNode = head;
21    let fast: ListNode = head;
22
23    while (fast && fast.next) {
24        slow = slow.next;
25        fast = fast.next.next;
26    }
27
28    // 2. reverse the second half
29    let second: ListNode = slow.next;
30    slow.next = null;
31
32    let prev: ListNode | null = null;
33
34    while (second) {
35        const temp = second.next;
36        second.next = prev;
37        prev = second;
38        second = temp;
39    }
40
41    // 3. merge the two lists together in the target poitions
42    let first = head;
43    second = prev;
44
45    while (second) {
46        const temp1 = first.next;
47        const temp2 = second.next;
48
49        first.next = second;
50        second.next = temp1;
51
52        first = temp1;
53        second = temp2;
54    }
55};