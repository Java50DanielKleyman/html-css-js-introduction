// class Deferred {
//   str;
//   constructor() {
//     this.str = ''
//   }
//   resolve(word) {
//     return this.str = word;
//   }
//   then(fun) {
//     setTimeout(() => this.str = fun(this.str), 0)
//   }
// }

class Deferred {
  #functions;
  constructor() {
    this.#functions = []
  }
  then(fun) {
    this.#functions.push(fun)
  }
  resolve(value) {
    this.#functions.forEach(fun => value = fun(value))
  }
}
const d = new Deferred()

d.then(function (res) { console.log("1 ", res); return "a"; });
d.then(function (res) { console.log("2 ", res); return "b"; });
d.then(function (res) { console.log("3 ", res); return "c"; });
d.resolve('hello');
