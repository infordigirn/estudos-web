// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto[`marca do produto`] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto[`marca do produto`]
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Renato',
        idade: 45,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Glenda',
        idade: 35
    },{
        nome: 'Renato',
        idade: 45
    }],
    calcularSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 456
console.log(carro)