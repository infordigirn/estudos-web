let valor // não inicializada
console.log(valor)

valor = null
console.log(valor)

const prod = {}
console.log(prod.nome)
console.log(prod)

prod.preco = 3.50
console.log(prod)

prod.preco = undefined
console.log(!!prod.preco)
console.log(prod)

prod.preco = null
console.log(prod)