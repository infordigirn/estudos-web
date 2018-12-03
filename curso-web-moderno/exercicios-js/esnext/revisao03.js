// ES8: Object.values/ Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, // não precisa referenciar como antes (nome: nome)
    ola() { // não precisa referenciar como antes( ola: finction(){ return } )
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class { Somente a estrutura - por traz é uma função }
class Animal {}
class Cachorro extends Animal { //Herança
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar()) //Estância de objeto
