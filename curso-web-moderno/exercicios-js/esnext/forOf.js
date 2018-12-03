for (let letra of "Cod3r") {
    console.log(letra)
}


const assuntosEcma = ['Map', 'Set', 'Promise']
// com for in 
for (let index in assuntosEcma) {
    console.log(index) // retorn o index do array
}

// com for of
for (let assunto of assuntosEcma) {
    console.log(assunto) // retorn o valor armazenado
}

// for of no Map()
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado:true }],
    ['Promise', { abordado: false }]
])

// retornando chave e valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// retornado só a chave
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// retornando só os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// desetruturando as entradas em chave e valor
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// for of no Set()
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}