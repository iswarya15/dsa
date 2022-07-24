import {
  Interval,
} from '/opt/node/lib/lintcode/index.js';

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: the minimum number of conference rooms required
   */
  minMeetingRooms(intervals) {
    // Meet 1 => 0 --------------------------------- 30  Room 1
    // Meet 2 =>      5 ----- 10                         Room 2
    // Meet 3 =>                    15 ------20          Room 2

    // Write your code here
    let start = [];
    let end = [];
    let st = 0, ed = 0, res = 0, count = 0;
    for (let i of intervals) {
      start.push(i.start);
    }
    start.sort((a, b) => a - b)
    for (let j of intervals) {
      end.push(j.end);
    }
    end.sort((a, b) => a - b);
    while (st < intervals.length) {
      // If two meetings are starting (5,10) and ending (10,20) at the same time, we want to first consider the meeting that is ending
      // because the (10,20) starts only after (5,10)
      if (Math.min(start[st], end[ed]) == end[ed]) {
        count--;
        console.log('Meeting ends', count)
        ed++;
      } else {
        count++;
        st++;
        console.log('Meeting starts', count)
      }
      // Keep track of maximum number of rooms required
      res = Math.max(res, count)
    }
    return res;
  }
}