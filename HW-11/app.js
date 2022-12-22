
console.log(printAnanas());
console.log(getDiditsSum(-280.123));
console.log(computeExpression("9 + 100 / 2"));
console.log(reverse(-892.458));

function printAnanas() {
    let c = 'A' + +'jwhkw1' + 'A' + 'S';
    с = c.toLowerCase();
    return с;
}
function getDiditsSum(number) {
    if (number < 0) {
        number = Math.abs(number);
    }
    number = Math.trunc(number);
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.trunc(number / 10);
    }
    return sum;
}
function computeExpression(expressionStr) {
    let res = eval(expressionStr);
    return res;
}

function reverse(number) {
    if(number==0)
    return '0';
    number = Math.trunc(number);
    let numberReverse = '';
    if (number < 0) {
        number = Math.abs(number);
        numberReverse = '-';
    }
    while (number) {
        let a = number % 10;
        numberReverse += a;
        number = Math.trunc(number / 10);
    }
    return numberReverse;
}

