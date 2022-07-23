/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  // 1----3
  //    2------6
  let results = [], currPair = intervals[0], index = 1;
  while (index < intervals.length) {
    if (currPair[1] >= intervals[index][0]) {
      currPair[0] = Math.min(intervals[index][0], currPair[0]);
      currPair[1] = Math.max(intervals[index][1], currPair[1]);
    } else {
      results.push(currPair);
      currPair = intervals[index];
    }
    console.log(currPair);
    index++;
  }
  results.push(currPair)
  return results;
};
// @lc code=end

