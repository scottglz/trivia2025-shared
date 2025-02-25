import { range } from '../ranger';
export interface userFull {
    userid: number;
    username: string;
    startday: string;
    email: string;
    activeRanges: range[];
    avatarUrl: string;
}
/**
 * Is/Was the user active on the given day?
 */
export declare function isUserActive(user: userFull, day: string): boolean;
/**
 * Is/Was the user active on any day of the given year
 */
export declare function isUserActiveInYear(user: userFull, year: string | number): boolean;
//# sourceMappingURL=users.d.ts.map