let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
// console.log(this.a) undefined
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3
console.log(global.abc)