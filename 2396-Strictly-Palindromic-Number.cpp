#define IOS ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    string convertToBaseNum(int n, int base) {
        IOS
        string temp = "";

        while (n > 0) {
            temp += to_string(n % base);
            n /= base;
        }
        reverse(temp.begin(), temp.end());
        return temp;
    }

    bool isPalindrom(string number) {
        IOS
        int i = 0, j = number.size();

        while (i < j) {
            if (number[i] != number[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
    bool isStrictlyPalindromic(int n) {
        IOS
        for (int i = 2; i <= n - 2; i++) {
            string temp = convertToBaseNum(n, i);
            bool flag = isPalindrom(temp);

            if (!flag)
                return false;
        }
        return true;
    }
};

/*
bool isStrictlyPalindromic(int n) {
    return false;
}
*/
