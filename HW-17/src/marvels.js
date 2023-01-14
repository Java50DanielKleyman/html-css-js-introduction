// references to html elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
const letterElement = document.querySelector(".letter");
let wordLettersElement;
//global variables
const questionsWords = [["Capital of Australia", "canberra"], ["Jewish holiday", "purim"], ["Inventor of radio", "marconi"], ["The world's largest island", "greenland"], ["Austrian composer", "strauss"]]// чтоб не шли подряд и не повторялись
//const questionsWords = [["Capital of Australia", "canberra"], ["Jewish holiday", "purim"]]
let currentIndex = 0; // when startGame - index++, сравнить с длиной и если равно длине - то индекс равен нулю
let initialLettersNumber;
let remainedLetters;
let word;

//functions:
function startGame() {

    wordInputElement.value = '';
    wordInputElement.readOnly = true;// на  takechance  и в конце processletter
    letterInputElement.readOnly = false;
    questionElement.innerHTML = questionsWords[currentIndex][0];// нулевой элемент i-го массива
    playAgain.style.display = 'none';
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs(); // class letter
    initialLettersNumber = word.length;
    remainedLetters = Math.ceil(initialLettersNumber * 0.3);
    remainedLettersElement.innerHTML = `letters remained: ${remainedLetters}`;
    currentIndex === questionsWords.length - 1 ? currentIndex = 0 : currentIndex++;
}
function getWordDivs() {
    word = questionsWords[currentIndex][1];
    let arrayWord = Array.from(word);
    let stringResult = arrayWord.reduce(function (res, cur, index) {
        res = res + `<div class="letter" id = "${index}">${arrayWord[index]}</div>`
        return res;
    }, '');
    return stringResult;
}
function checkWord() {
    if (wordInputElement.value.length != word.length) {
        alert("wrong number of letters!!!")
        wordInputElement.value = '';
    }
    if (wordInputElement.value.length === word.length) {
        wordInputElement.readOnly = true;
        finishGame()
        Array.from(word).map(function (item, index) {
            document.getElementById(index).style = "background-color: white";
        })
    }
    // TODO
}
function processLetter() {
    let letter = letterInputElement.value;
    Array.from(word).map(function (item, index) {
        if (item === letter) {
            document.getElementById(index).style = "background-color: white";
        }
    })
    letterInputElement.value = '';
    remainedLetters--;
    remainedLettersElement.innerHTML = `letters remained: ${remainedLetters}`;
    if (remainedLetters === 0) {
        wordInputElement.readOnly = false;
        letterInputElement.readOnly = true;

    }
    // TODO
}
function takeChance() {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;


    // TODO
}
function finishGame() {

    if (wordInputElement.value === word) {
        resultMessage.innerHTML = "You WIN!!!"
        playAgain.style.display = 'block';
    }
    else if ((wordInputElement.value != word)) {
        resultMessage.innerHTML = "You LOOSE!!!"
        playAgain.style.display = 'block';
    }

}
//actions
startGame();