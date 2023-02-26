"use strict";
function shiftRound(str, shift) {
    let inputStr = str.toLowerCase();
    let shiftPositive = Math.abs(shift);
    let charCodeArr = checkShiftCode(inputStr, shiftPositive);
    return charCodeArr.reduce((res, cur) => {
        return res += String.fromCharCode(cur);
    }, '');
}
function checkShiftCode(inputStr, shift) {
    let charCodeArr = [];
    let startAsciiInd = 97;
    let endAsciiInd = 122;
    for (let i = 0; i < inputStr.length; i++) {
        let code = inputStr.charCodeAt(i);
        if (code < startAsciiInd || code > endAsciiInd) {
            charCodeArr.push(code);
        }
        else if (code + shift > endAsciiInd) {
            code = code + shift - endAsciiInd + startAsciiInd - 1;
            charCodeArr.push(code);
        }
        else {
            charCodeArr.push(code + shift);
        }
    }
    return charCodeArr;
}
console.log(shiftRound("A@abx!", -1));
function unshiftRound(str, shift) {
    let inputStr = str.toLowerCase();
    let shiftPositive = Math.abs(shift);
    let charCodeArr = checkUnshiftCode(inputStr, shiftPositive);
    return charCodeArr.reduce((res, cur) => {
        return res += String.fromCharCode(cur);
    }, '');
}
function checkUnshiftCode(inputStr, shift) {
    let charCodeArr = [];
    let startAsciiInd = 97;
    let endAsciiInd = 122;
    for (let i = 0; i < inputStr.length; i++) {
        let code = inputStr.charCodeAt(i);
        if (code < startAsciiInd || code > endAsciiInd) {
            charCodeArr.push(code);
        }
        else if (code - shift < startAsciiInd) {
            code = code - shift + endAsciiInd - startAsciiInd + 1;
            charCodeArr.push(code);
        }
        else {
            charCodeArr.push(code - shift);
        }
    }
    return charCodeArr;
}
console.log(unshiftRound("aeFb!", -4));
//# sourceMappingURL=app.js.map