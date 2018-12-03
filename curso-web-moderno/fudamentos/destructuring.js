const pessoa = {
    nome: 'Ana',
    idade: 18,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 03
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, ultimoNome = 0 } = pessoa
console.log(sobrenome, ultimoNome)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)