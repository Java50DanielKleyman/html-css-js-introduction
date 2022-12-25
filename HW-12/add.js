function myParseInt(str, base) {
    base = base || 10;
    let minus;
    if (str[0] == '-') {
        str = str.substring(1);
        minus = '-';
    }
    let res = 0;
    if (str[0] > '9' && base == 10)
        return res = NaN;
    
        for (let i = 0; i < str.length; i++) {
        if (str[i] > '0' && str[i] <= '9') {
            res = res * base + getCode(str[i]);

        }
        else return res = minus == '-' ? -res : res;
    }
    res = minus == '-' ? -res : res;
    return res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

let str = "123.35";
let str1 = "js.5";
console.log(parseInt(str1,36));
console.log(myParseInt(str1,36));
/*let str1 = "ff";
let str2 = "123";
let str22 = "Java";
let str3 = "123mb";
let str4 = "123.5";
*/
function myToString(number, base) {
    let minus = number < 0 ? '-' : '';
    number = Math.abs(number);
    let fraction = number % 1;
    number = '' + number;
    const myArray = number.split(".");
    let number1 = parseInt(myArray[0]);
    let number2 = parseInt(myArray[1]);
    let res1 = '';
    let res2 = '';
    base = base || 10;
    do {
        const digit = number1 % base;
        const symbol = getSymbol(digit);
        res1 = symbol + res1;
        number1 = Math.trunc(number1 / base);
    } while (number1);
    if (fraction != 0) {
        do {
            const digit = number2 % base;
            const symbol = getSymbol(digit);
            res2 = symbol + res2;
            number2 = Math.trunc(number2 / base);
        } while (number2);
    }
    let res = fraction != 0 ? (res1 + '.' + res2) : res1;
    if (minus == '-')
        res = minus + res;
    return res;
}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}
let num100 = -123.45;
let str100 = num100.toString();
let myStr100 = myToString(num100);
console.log(num100.toString());
console.log(myToString(num100));


