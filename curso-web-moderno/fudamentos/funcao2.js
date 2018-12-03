// função em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando em arrow function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorn implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))