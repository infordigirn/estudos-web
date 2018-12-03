// Função em JS é First-Class Object (Citzens)
// HIGHER ORDER FUNCTION

//Função de forma literal
function fun1() { }

// Funçaõ armazenada em variável
const fun2 = function() { }

//Função armazenada dentro de array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Função armazenada dentro de objeto
const obj = { }
obj.falar = function() { return "Opa!" }
console.log(obj.falar())

//Função passad como parametro de outra função
function run(fun) {
    fun()
}
run(function() { console.log('Executando...') })

// Função como retorno de uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b +c)
    }
}
soma(2, 3)(4)
//ou
const resp = soma(2, 3)
resp(4)