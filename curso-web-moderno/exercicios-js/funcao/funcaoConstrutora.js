function Carro(velocidade = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidade) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidade
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())