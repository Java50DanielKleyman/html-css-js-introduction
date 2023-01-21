function createAddress(city, street) {
    return { city, street }
}
function createPerson(id, name, address) {
    return { id, name, address }
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress("Lod", "Sokolov"))
]
function RehovotMaxId(persons, city) {
    return persons.filter(person => person.address.city === city).sort((a, b) => b.id - a.id)[0].name
}
console.log(RehovotMaxId(persons, "Rehovot"))
function statistics(persons) {
    return persons.reduce((res, empl) => (empl.address.city === "Rehovot" ? res.Rehovot += 1 : 
    empl.address.city === "Tel-Aviv" ? res['Tel-Aviv'] += 1 : res.Lod += 1) && res, 
    { Rehovot: 0, 'Tel-Aviv': 0, Lod: 0 });
}

console.log(statistics(persons))
//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya

//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city.
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}