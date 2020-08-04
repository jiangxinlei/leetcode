/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (65.64%)
 * Likes:    705
 * Dislikes: 0
 * Total Accepted:    72.7K
 * Total Submissions: 105.2K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
/* dp
  const dp = Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
   */

  const memo = Array(n + 1).fill(0);

  const recur = (n) => {
    if (n === 0 || n === 1) return memo[n] = 1;

    if (memo[n] > 0) return memo[n];

    for (let i = 0; i < n; i++) {
      memo[n] += recur(i) * recur(n - i - 1);
    }

    return memo[n];
  };

  return recur(n);
};
// @lc code=end

