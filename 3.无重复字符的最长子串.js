/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.70%)
 * Likes:    3611
 * Dislikes: 0
 * Total Accepted:    473.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 窗口滑动题
  // 如果字符串不存在，就返回 0
  if (s.length === 0) return 0;

  // 创建一个 set 用来存储 s[i]
  const set = new Set();

  // 创建 i 和 j 两个指针，和 不重复字符串的长度 maxLength
  let i = 0, j = 0, maxLength = 0;

  // 遍历字符串
  for (; i < s.length; i++) {

    if (!set.has(s[i])) {
      // 如果 set 里没有当前字符串，将字符串添加到 set 里
      // maxLength 和 set 的长度比较
      set.add(s[i]);
      maxLength = Math.max(set.size, maxLength);
    } else {
      // 循环当 set 里有当前字符串
      while (set.has(s[i])) {
        // set 删除 j 下标的值，j++
        set.delete(s[j]);
        j++;
      }
      // 将当前值再放入 set 里
      set.add(s[i]);
    }
  }

  // 最后返回 maxLength
  return maxLength;
};
// @lc code=end

