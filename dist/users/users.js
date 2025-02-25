'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserActive = isUserActive;
exports.isUserActiveInYear = isUserActiveInYear;
const ranger_1 = require("../ranger");
const days_1 = require("../days");
/**
 * Is/Was the user active on the given day?
 */
function isUserActive(user, day) {
    const dayNum = (0, days_1.getDayNumber)(day);
    return (0, ranger_1.rangesOverlap)(user.activeRanges, dayNum, dayNum);
}
/**
 * Is/Was the user active on any day of the given year
 */
function isUserActiveInYear(user, year) {
    const firstDayNum = (0, days_1.getDayNumber)(year + '-01-01');
    const lastDayNum = (0, days_1.getDayNumber)(year + '-12-31');
    return (0, ranger_1.rangesOverlap)(user.activeRanges, firstDayNum, lastDayNum);
}
//# sourceMappingURL=users.js.map