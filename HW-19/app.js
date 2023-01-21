function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//TODO
//returns country with most amount of employees
function getMostPopulatedCountry(employees) {
    return Object.entries(getCountries(employees)).sort((empl1, empl2) => empl2[1] - empl1[1])[0][0]
}
function getCountries(employees) {
    const res = {};
    employees.forEach(empl => {
        if (!res[empl.address.country]) {
            res[empl.address.country] = 1
        } else {
            res[empl.address.country]++;
        }
    });
    return res;
}
console.log(`country with most amount of employees: ${getMostPopulatedCountry(employees)}`);
//returns a given number (conter) of countries with most amount of
//employees
function getMostPopulatedCountries(employees, counter) {
    const res = Object.entries(getCountries(employees)).sort((empl1, empl2) => empl2[1] - empl1[1])
        .filter((__, index) => index < counter);
    res.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`))
}
console.log(getMostPopulatedCountries(employees, 3))

function isAnagram(word, anagram) {
    if (word.length != anagram.length) {
        return false;
    };
    let arrayWordSorted = Object.entries(getObject(word.toLowerCase().split(''))).sort(wordsSort);
    let arrayAnagramSorted = Object.entries(getObject(anagram.toLowerCase().split(''))).sort(wordsSort);
    for (let i = 0; i < arrayWordSorted.length; i++) {
        if (arrayWordSorted[i][0] != arrayAnagramSorted[i][0] || arrayWordSorted[i][1] != arrayAnagramSorted[i][1]) {
            return false;
        }
    }
    return true;
}
function getObject(wordArray) {
    const res = {};
    wordArray.forEach(letter => {
        if (!res[letter]) {
            res[letter] = 1
        } else {
            res[letter]++;
        }
    });
    return res;
}
function wordsSort(letter1, letter2) {
    let res = letter2[1] - letter1[1];
    if (res === 0) {
        res = letter1[0] < letter2[0] ? -1 : 1
    }
    return res;
}

console.log(isAnagram("hello", "lloeH"))
//TODO
//returns true if a given anagram is indeed an angram of a given word
//anagram must have same length as word
//anagram must have all letters from word
//hello anagram examples: e
//lolh, olleh, ohell, lehol
//exampls non
//anagrams: eloll (no h), ollehh(different length),
// olaeh ("a" doesn't exist in word), oleh(different length)