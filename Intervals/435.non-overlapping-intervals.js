/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  // 1----2
  // 1---------3 (Remove)
  //      2----3
  //           3----4

  let prevEnd = intervals[0][1], count = 0, index = 1;

  while (index < intervals.length) {
    if (prevEnd > intervals[index][0]) {
      count++;
      prevEnd = Math.min(prevEnd, intervals[index][1]);
    } else {
      prevEnd = intervals[index][1];
    }
    index++;
  }
  return count;

};
// @lc code=end

