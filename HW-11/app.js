
console.log(printAnanas());
console.log(getDiditsSum(-280.123));
console.log(computeExpression("9 + 100 / 2"));
console.log(reverse(-280.123));

function printAnanas() {
    let c = 'A' + 0 / 0 + 'A' + 'S';
    let d = c.toLowerCase();
    return d;
}
function getDiditsSum(number) {
    if (number < 0) {
        number = - number;
    }
    number = Math.trunc(number);
    let sum = 0;
    while (number != 0) {
        sum = sum + number % 10;
        number = number / 10;
        number = Math.trunc(number);
    }
    return sum;
}
function computeExpression(expressionStr) {
    return Function(`'use strict'; return (${expressionStr})`)()
}

function reverse(number) {
    number = Math.trunc(number);
    let numberReverse = '';
    if (number < 0) {
        number = - number;
        numberReverse = '-';
    }
    while (number != 0) {
        let a = number % 10;
        numberReverse = numberReverse + a.toString();;
        number = number / 10;
        number = Math.trunc(number);
    }
    return numberReverse;
}

