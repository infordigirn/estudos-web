
function real(partes, ...valores){
    const resultado =[]
    valores.forEach((valor, index) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[index], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou em 3x de ${precoParcela}`)