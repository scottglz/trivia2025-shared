'use strict';

import { rangesOverlap, range } from '../ranger';
import { getDayNumber } from '../days';


export interface userFull {
   userid: number,
   username: string,
   startday: string,
   email: string,
   activeRanges: range[],
   avatarUrl: string
}

/**
 * Is/Was the user active on the given day?
 */

export function isUserActive(user: userFull, day: string) {
   const dayNum = getDayNumber(day);
   return rangesOverlap(user.activeRanges, dayNum, dayNum);
}

/**
 * Is/Was the user active on any day of the given year
 */
export function isUserActiveInYear(user: userFull, year: string|number) {
   const firstDayNum = getDayNumber(year + '-01-01');
   const lastDayNum = getDayNumber(year + '-12-31');
   return rangesOverlap(user.activeRanges, firstDayNum, lastDayNum);
}

        

