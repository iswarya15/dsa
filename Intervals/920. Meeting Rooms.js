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
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    // Write your code here
    // Meet 1 => 0 ------------------------------ 30
    // Meet 2 =>        5 ----- 10
    // Meet 3 =>                    15 ----- 20

    // Meet 1 => 5 ------------- 8
    // Meet 2 =>                     9 ----------- 15
    if (intervals.length == 0) {
      return true;
    }
    intervals.sort((a, b) => a.start - b.start);
    let prevEnd = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i].start < prevEnd) {
        return false;
      } else {
        prevEnd = intervals[i].end;
      }
    }
    return true;
  }
}