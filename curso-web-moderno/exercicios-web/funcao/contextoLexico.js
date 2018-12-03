const valor = 'Global'

function myFunc() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    myFunc()
}

exec()