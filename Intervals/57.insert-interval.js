/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [], index = 0, currPair = [0, 0];

  // push intervals which are smaller to newInterval to results.
  // curr interval: [1,2] newInterval:  [4,8]: no overlapping
  // 1----2 
  //          4----8
  while (index < intervals.length && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index]);
    index++;
  }
  // Merge over-lapping intervals 
  //   4-----8
  // 3----5

  while (index < intervals.length && newInterval[1] >= intervals[index][0]) {
    currPair[0] = Math.min(newInterval[0], intervals[index][0]);
    currPair[1] = Math.max(newInterval[1], intervals[index][1]);
    newInterval = currPair;
    index++;
  }
  result.push(newInterval);

  // Rest of the intervals are greater than newInterval, so we push them to results
  while (index < intervals.length) {
    result.push(intervals[index]);
    index++
  }
  return result;
};
// @lc code=end

