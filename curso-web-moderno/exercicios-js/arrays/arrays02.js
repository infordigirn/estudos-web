const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
console.log('Array origin: ', pilotos)
pilotos.pop() // remove o ultimo elemento do array
console.log('pop', pilotos)

pilotos.push('Vestappen')
console.log('push', pilotos)

pilotos.shift() // remove o primeiro indice do array
console.log('shift', pilotos)

pilotos.unshift('Hamilton')
console.log('unshift', pilotos)

// splice pode adicionar e remover elementos de um array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log('add splice', pilotos)

// remover
pilotos.splice(3, 1)
console.log('del splice', pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log('slice', algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log('slice', algunsPilotos2)