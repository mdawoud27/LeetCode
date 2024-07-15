#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    bool isPalindrome(string s) {
        IOS 
        int i = 0, j = s.size() - 1;

        while (i < j) {
            while (i < j && !isalnum(s[i])) i++;
            while (i < j && !isalnum(s[j])) j--;

            if (tolower(s[i]) == tolower(s[j])) i++, j--;
            else return false;
        }
        return true;
    }
};