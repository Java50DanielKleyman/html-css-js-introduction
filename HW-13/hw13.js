function getHtmlUl(array) {
    const res = [];
    res[0] = '<ul class="list_class">';
    res[array.length+1] = '</ul>'
    for (let i = 1; i < array.length+1; i++) {
        res[i] = array[i - 1] === 0 ? '<li class="item_class"><div class="white"></div></li>'
            : '<li class="item_class"><div class="black"></div></li>';
    }
    return res.join('');
}
function getRandomArray(length, min, max) {
    const myArray = [];
    for (let i = 0; i < length; i++) {
        myArray.push(getRandomNumber(min, max));
    }
    return myArray;
} function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min + 1))
}

console.log(getHtmlUl(getRandomArray(2, 0, 1)));