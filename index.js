/**
 * Converts miliseconds to 00:00:00:000 format.
 * @param {(Number|String)} ms Miliseconds to convert.
 * @returns {String} String in 00:00:00:000 format.
 */
function ms2human(ms) {
    if (Number(ms) != 0 && !isNaN(Number(ms)) && ms != undefined && ms != null && (typeof ms == "string" || typeof ms == "number")) {
        ms = Number(ms);
        const pad = n => n.toString().padStart(2, '0');
        const pad2 = n => n.toString().padStart(3, '0');
        const h = pad(Math.floor(ms / 3600000));
        const m = pad(Math.floor(ms % 3600000 / 60000));
        const s = pad(Math.floor(ms % 3600000 % 60000 / 1000));
        const mis = pad2(Math.floor(ms % 3600000 % 60000 % 1000));
        var resp = (h == 00 && m == 00 && s == 00) ? ('00:' + mis) : (h == 00 && m == 00) ? (s + ':' + mis) : (h == 00) ? (m + ':' + s + ':' + mis) : (h + ':' + m + ':' + s + ':' + mis);
        return resp;
    } else {
        return undefined;
    }
};
module.exports = ms2human;