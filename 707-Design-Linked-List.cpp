#define IOS   ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class MyLinkedList {
    
    struct ListNode {
        int val;
        ListNode* next;
    };

private:
    ListNode* head;
    ListNode* tail;
public:
    MyLinkedList() {
        head = tail = nullptr;
    }

    int get(int index) {
        IOS
        ListNode* ptr = head;
        int i = 0;

        while (ptr) {
            if (i == index)
                return ptr->val;
            i++;
            ptr = ptr->next;
        }
        return -1;
    }

    void addAtHead(int val) {
        IOS
        ListNode* newNode = new ListNode;
        newNode->val = val;
        newNode->next = head;
        head = newNode;

        if (tail == nullptr)
            tail = newNode;
    }

    void addAtTail(int val) {
        IOS
        ListNode* newNode = new ListNode;
        newNode->val = val;
        newNode->next = nullptr;

        if (tail == nullptr) {
            head = tail = newNode;
            return;
        }

        tail->next = newNode;
        tail = newNode;
    }

    void addAtIndex(int index, int val) {
        IOS
        if (index == 0) {
            addAtHead(val);
            return;
        }

        ListNode* newNode = new ListNode;
        newNode->val = val;
        ListNode* ptr = head;
        int i = 0;

        while (i < index - 1 && ptr) {
            i++;
            ptr = ptr->next;
        }

        if (ptr == nullptr)
            return;

        newNode->next = ptr->next;
        ptr->next = newNode;

        if (newNode->next == nullptr)
            tail = newNode;
    }

    void deleteAtIndex(int index) {
        IOS
        if (head == nullptr)
            return;
        if (index == 0) {
            ListNode* temp = head;
            head = head->next;
            delete temp;
            
            if (head == nullptr)
                tail = nullptr;
            return;
        }
        
        ListNode* ptr = head;
        int i = 0;

        while (ptr && i < index - 1) {
            i++;
            ptr = ptr->next;
        }
        
        if (!ptr || !ptr->next)
            return;

        ListNode* temp = ptr->next;
        ptr->next = ptr->next->next;
        delete temp;
        
        if (!ptr->next)
            tail = ptr;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList* obj = new MyLinkedList();
 * int param_1 = obj->get(index);
 * obj->addAtHead(val);
 * obj->addAtTail(val);
 * obj->addAtIndex(index,val);
 * obj->deleteAtIndex(index);
 */