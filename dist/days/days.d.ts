export declare function today(): string;
export declare function tomorrow(): string;
export declare function daysAgo(n: number): string;
/**
 * Get the integral day within the epoch for the given day string in yyyy-mm-dd format
 * @param {String} yyyymmdd day date in yyyy-mm-dd format
 */
export declare function getDayNumber(yyyymmdd: string): number;
export declare function dateToDayString(date: Date | number): string;
export declare function dayStringToDate(dayString: string): Date;
export declare const dayNames: string[];
export declare function formatDateFancy(date: Date | string): string;
export declare function firstDay(day1: string, day2: string): string;
export declare function isDayInYear(day: string, year: number): boolean;
//# sourceMappingURL=days.d.ts.map