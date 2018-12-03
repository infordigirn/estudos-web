// let -> escopo de bloco 
{
    var a = 2 
    let b = 3
    console.log(b) // só desponível dentro do bloco
}
console.log(a)
//console.log(b) // não disponível fora do bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const[l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', sexo: 'F', idade: 18 }
console.log(idade, nome)