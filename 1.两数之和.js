/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (48.10%)
 * Likes:    8021
 * Dislikes: 0
 * Total Accepted:    969.5K
 * Total Submissions: 2M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 初始化一个 map，保存 key - value
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // 计算差值
    const dval = target - nums[i];

    // 如果 map 中有这个差值，就返回差值的 key
    if (map.has(dval)) {
      return [map.get(dval), i]
    }
    // 否则将值和key存入 map 中，这样存的目的是，可以通过 map.get 获取 key
    map.set(nums[i], i);
  }

  return [];
};
// @lc code=end

