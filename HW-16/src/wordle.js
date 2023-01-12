//references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//varibales required for JS logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver", "index",
    "script", "peace", "picture"]
let trials;
let word;
let flGameOver = false;
//functions
function startGame() {
    word = getWord();
    fillLettersDivs();
    flGameOver = false;
    trials = word.length + 1;
    playAgainElement.style.display = "none";
    gameResultElement.innerHTML = "";
    trialsElement.innerHTML = `remained trials ${trials}`;
    guessInputElement.value = '';
}
function getWord() {
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs() {
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>'
        return res;
    }, '');
    lettersDivs = document.querySelectorAll(".letter");
}
function onChange() {
    if (flGameOver) {
        alert("game is over, press play-again")
    }
    else {
        const trialWord = guessInputElement.value;
        if (trialWord.length === word.length) {
            trials--;
        }
        trialsElement.innerHTML = `remained trials ${trials}`;
        if (trialWord === word) {
            finishGame(1);
        };
        if (trialWord != word && trials === 0) {
            finishGame(0);
        };
        if (trialWord.length != word.length && trials != 0) {
            alert("wrong number of letters");
        } else if (trials != 0 || trialWord === word) {
            coloringWord(trialWord);
        }
        guessInputElement.value = '';
    }
}
function coloringWord(trialWord) {
    const arWord = Array.from(trialWord);
    arWord.forEach(function (letter, index) {
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor(letter, index);
    })
}
function getColor(letter, index) {
    let res = "red"
    if (word.includes(letter)) {
        res = word[index] == letter ? "green" : "yellow"
    }
    return res;
}
function finishGame(status) {
    flGameOver = true;
    if (status === 1) {
        // alert(`You win the game in ${word.length - trials + 1} trials, press play-again`)
        trialsElement.innerHTML = `You win the game in ${word.length - trials + 1} trials, press "Play again"`;
        playAgainElement.style.display = "";
        gameResultElement.innerHTML = "WINNER!!!"
    } else {
        //     alert('You loose the game, press play-again')
        playAgainElement.style.display = "";
        gameResultElement.innerHTML = "LOOSER!!!"
        trialsElement.innerHTML = `You loose the game`;
        coloringWord(word);
    }
}

//TODO

//actions
startGame();