// Cadeia de protótipos (prototype chain)
Object.prototype.Attr0 = 'Pai de todos'
const avo = { Attr1: 'Avo' }
const pai = { __proto__: avo, Attr2: 'Pai' }
const filho = { __proto__: pai, Attr3: 'Filho' }
console.log(filho.Attr0, filho.Attr1, filho.Attr2, filho.Attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())