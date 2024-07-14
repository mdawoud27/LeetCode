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
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        if (!head || left == right) return head;

        ListNode *prev = nullptr; // will used to revese specific sublist
        ListNode *current = head;

        for (int i = 1; i < left; i++) {
            prev = current;
            current = current->next;
        }

        ListNode *leftSubList = prev;
        ListNode *tail = current;

        for (int i = 0; i <= right - left; i++) {
            ListNode* next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }

        if (leftSubList) leftSubList->next = prev;
        else head = prev;
        tail->next = current;
    
        return head;
    }
};
