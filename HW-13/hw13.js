function getHtmlUl(array) {
    const result = [];
    let color = '';
    result[0] = '<ul class="list_class">';
    result[array.length + 1] = '</ul>'
    for (let i = 1; i < array.length + 1; i++) {
        color = array[i - 1] === 0 ? 'white' : 'black';
        result[i] = `<li class="item_class"><div class="${color}"></div></li>`;
    }
    return result.join('');
}
console.log(getHtmlUl(getRandomArray(2, 0, 1)));

function getRandomArray(length, min, max) {
    const myArray = [];
    for (let i = 0; i < length; i++) {
        myArray.push(getRandomNumber(min, max));
    }
    return myArray;
} function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min + 1))
}

function transMatrix(matrix) {
    let transMatrix = [];
    let columns = matrix.length;
    let rows = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        transMatrix.push([])
        for (let j = 0; j < columns; j++) {
            transMatrix[i].push(matrix[j][i])
        }
    }
    return transMatrix;
}

console.log(transMatrix(getMatrix(3, 2)));

function getMatrix(rows, columns) {
    const matrix = [];
    let count = 1;
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(count);
            count++;
        }
    }
    return matrix;
}