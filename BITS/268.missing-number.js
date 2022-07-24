/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var x1 = 0, x2 = 0, res;

  for (let i = 0; i <= nums.length; i++) {
    x1 = x1 ^ i;
  }
  for (let i = 0; i < nums.length; i++) {
    x2 = x2 ^ nums[i];
  }
  res = x1 ^ x2;
  return res
};
// @lc code=end

