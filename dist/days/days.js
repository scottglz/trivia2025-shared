"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayNames = void 0;
exports.today = today;
exports.tomorrow = tomorrow;
exports.daysAgo = daysAgo;
exports.getDayNumber = getDayNumber;
exports.dateToDayString = dateToDayString;
exports.dayStringToDate = dayStringToDate;
exports.formatDateFancy = formatDateFancy;
exports.firstDay = firstDay;
exports.isDayInYear = isDayInYear;
const MILLIS_IN_HOUR = 60 * 60 * 1000;
const MILLIS_PER_DAY = MILLIS_IN_HOUR * 24;
function today() {
    return daysAgo(0);
}
function tomorrow() {
    return daysAgo(-1);
}
function daysAgo(n) {
    return dateToDayString(new Date(new Date().getTime() - 8 * MILLIS_IN_HOUR - n * MILLIS_PER_DAY));
}
/**
 * Get the integral day within the epoch for the given day string in yyyy-mm-dd format
 * @param {String} yyyymmdd day date in yyyy-mm-dd format
 */
function getDayNumber(yyyymmdd) {
    const results = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec(yyyymmdd);
    if (!results) {
        throw new Error('bad day format ' + yyyymmdd);
    }
    const millis = Date.UTC(+results[1], +results[2] - 1, +results[3], 12, 0, 0);
    return Math.floor(millis / MILLIS_PER_DAY);
}
function pad2(n) {
    return n < 10 ? '0' + n : '' + n;
}
function dateToDayString(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    return date.getUTCFullYear() + '-' + pad2(date.getUTCMonth() + 1) + '-' + pad2(date.getUTCDate());
}
function dayStringToDate(dayString) {
    const matches = dayString.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (!matches) {
        return new Date();
    }
    return new Date(+matches[1], +matches[2] - 1, +matches[3]);
}
exports.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function formatDateFancy(date) {
    if (typeof date === 'string') {
        date = dayStringToDate(date);
    }
    return exports.dayNames[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}
// Like Math.min but works on day strings
function firstDay(day1, day2) {
    return day1 < day2 ? day1 : day2;
}
function isDayInYear(day, year) {
    return day.indexOf(year + '-') === 0;
}
//# sourceMappingURL=days.js.map