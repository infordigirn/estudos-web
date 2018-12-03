// Clousure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas

// contexto léxico em ação
function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const myFunc = fora()
console.log(myFunc())