export function getRandomNumber(min, max) { // max not included
    return min + Math.trunc(Math.random() * (max - min))
}