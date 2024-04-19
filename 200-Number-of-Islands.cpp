class Solution {
public:
    void markIsland(int i, int j, vector<vector<char>>& grid) {
        if (i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size() ||
            grid[i][j] == '0')
            return;

        grid[i][j] = '0';
        markIsland(i + 1, j, grid);
        markIsland(i - 1, j, grid);
        markIsland(i, j + 1, grid);
        markIsland(i, j - 1, grid);
    }
    int numIslands(vector<vector<char>>& grid) {
        int islandNumber = 0;

        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if (grid[i][j] == '1') {
                    islandNumber++;

                    markIsland(i, j, grid);
                }
            }
        }
        return islandNumber;
    }
};