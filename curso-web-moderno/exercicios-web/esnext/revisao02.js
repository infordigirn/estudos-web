// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'NodeJS') {
    console.log(texto)
}

log() // se não passar parametro ou undefined -> assume default // sepassar null retorna null
log('Mais Forte!') // qualquer outro passado é mais forte

// operador rest(função)/ spread(Objeto ou array)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
