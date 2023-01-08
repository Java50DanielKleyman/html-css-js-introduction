
function evenOddSort(array) {
    return array.sort(function (a, b) {
        return Math.abs(a % 2) - Math.abs(b % 2);
    })
}
console.log(`evens first from array [20, -10, 333, 1000, 552, 7, -7]: ${evenOddSort([20, -10, 333, 1000, 552, 7, -7])}`)

function oddEvenSort(array) {
    return array.sort(function (a, b) {
        return Math.abs(b % 2) - Math.abs(a % 2);
    })
}
console.log(`oddss first from array [20, -10, 333, 1000, 552, 7, -7]: ${oddEvenSort([20, -10, 333, 1000, 552, 7, -7])}`)

function evenAscOddDesc(array) {
    let arrayResult = evenOddSort(array).sort(function (a, b) {
        if (a % 2 == 0 && b % 2 == 0)
            return a - b;
        else if (a % 2 != b % 2)
            return 0;
        return b - a;
    });
    return arrayResult;
}
console.log(`evens ascending odds descending [20, -10, 1001, 1000, 552, 7, -7]: ${evenAscOddDesc([20, -10, 1001, 1000, 552, 7, -7])}`)

function getMin(array) {
    return array.reduce(function (res, cur) {
        return res = res > cur ? cur : res;;
    })
}
console.log(`min from array [-1,15,-25,-100,12] = ${getMin([-1, 15, -25, -100, 12])}`)

function getMax(array) {
    return array.reduce(function (res, cur) {
        return res = res < cur ? cur : res;;
    })
}
console.log(`max from array [-1,15,-25,100,12] = ${getMax([-1, 15, -25, -100, 12])}`)

function getAverage(array) {
    return array.reduce(function (res, cur, index) {
        res = res + cur;
        if (index === array.length - 1)
            return res / array.length
        else return res;
    });

}
console.log(`average from array [2,4,3] = ${getAverage([2, 4, 3])}`)

function getMinMaxAvg(array) {
    let minimum = maximum = array[0];
    let sum = 0;
    return array.reduce(function (res, cur, index) {
        sum += cur;
        minimum = minimum > cur ? cur : minimum;
        maximum = maximum < cur ? cur : maximum;
        if (index === array.length - 1) {
            res.push(minimum, maximum, sum / array.length)
        }
        return res;
    }, []);
}
console.log(`MinMaxAvg from array [10, 5, 3] = ${getMinMaxAvg([10, 5, 3])}`)