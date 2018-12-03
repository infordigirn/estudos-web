function tratarError(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'message'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarError(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Renato'}
imprimirNome(obj)