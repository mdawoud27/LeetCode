#define IOS   ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(0);
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        IOS
        int rows = grid.size(), columns = grid[0].size();
        int perimeter = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                if (grid[i][j]) {
                    perimeter += 4;

                    if (j > 0 && grid[i][j - 1]) perimeter -= 2;
                    if (i > 0 && grid[i - 1][j]) perimeter -= 2;
                } 
            }
        }
        return perimeter;
    }
};