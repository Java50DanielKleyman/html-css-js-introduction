function coloringString(str1, str2) {
if(str1.length !=str2.length)
 return console.log("error")
    const array1 = Array.from(str1);
    const array2 = Array.from(str2);
    const arrayResult = array2.map(function (number, index) {
        let color = '';
        const arrayTransit = array1.filter(function (number) {
            if (number == array2[index])
                return number;
        })
        if (array2[index] === array1[index])
            color = 'green';
        else if (array2[index] === arrayTransit[0])
            color = 'yellow';
        else color = 'red'
        return color;
    })
    return arrayResult;
}
console.log(coloringString('pappy', 'applew'));

function getNumbersWithDigitsAmount(digitsAmount, array) {
    const resultArray = array.filter(function (number) {
        let res = ''
        if (number < 0) {
            number = Math.abs(number).toString()
            res = number.length === digitsAmount ? '-' + number : '';
        }
        else {
            number = number.toString()
            res = number.length === digitsAmount ? number : '';
        }
        return Number(res);
    })
    return resultArray;
}
console.log(getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]))
