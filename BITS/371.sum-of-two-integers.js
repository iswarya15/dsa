/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 *
 * https://leetcode.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Medium (50.61%)
 * Likes:    2753
 * Dislikes: 4065
 * Total Accepted:    316.8K
 * Total Submissions: 626K
 * Testcase Example:  '1\n2'
 *
 * Given two integers a and b, return the sum of the two integers without using
 * the operators + and -.
 * 
 * 
 * Example 1:
 * Input: a = 1, b = 2
 * Output: 3
 * Example 2:
 * Input: a = 2, b = 3
 * Output: 5
 * 
 * 
 * Constraints:
 * 
 * 
 * -1000 <= a, b <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // Step 1: Find the positions that has a carry using (&)
  // 0001
  // 0011
  // 0001 => a&b (Carry) => b
  // Step 2: Do the actual addition
  // 0001
  // 0011
  // 0010 => a^b (Addition) => a
  // Step 3: Left shift carry => b
  // 0010 => Carry << 1 => b
  // Step 4: Step 1 repeat
  // 0010
  // 0010
  // 0000 => Step 2 repeat
};
// @lc code=end

