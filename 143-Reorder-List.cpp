/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    void reorderList(ListNode* head) {
        /* // Recursion Approach
        if (!head || !head->next || !head->next->next)
            return;

        ListNode* secondLastNode = head;
        while (secondLastNode->next->next)
            secondLastNode = secondLastNode->next;

        secondLastNode->next->next = head->next;
        head->next = secondLastNode->next;
        secondLastNode->next = NULL;

        reorderList(head->next->next);
        */

        /*Two Pointer Approach*/

        // step 1. find the middle of the list using slow and fast pointer
        ListNode *slow = head, *fast = head;
        while (fast->next && fast->next->next) {
            slow = slow->next;
            fast = fast->next->next;
        } // Now slow pointer is at the middle

        // step 2. reverse the second half
        ListNode *prev = nullptr;
        ListNode *curr = slow->next;
        slow->next = nullptr; // break the list into halves

        while (curr) {
            ListNode *next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }

        // step 3. merge the 2 halves
        ListNode *first = head;
        ListNode *second = prev;

        while (second) {
            ListNode *temp1 = first->next;
            ListNode *temp2 = second->next;

            first->next = second;
            second->next = temp1;

            first = temp1;
            second = temp2;
        }

    }
};