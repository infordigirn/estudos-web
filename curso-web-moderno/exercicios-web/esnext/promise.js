// Promise
function falaDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falaDepoisDe(3, 'Que legal!\n')
    .then(frase => frase.concat('Deu certo!!! :)'))
    .then(outrFrase => console.log(outrFrase))
    .catch(err => console.log(err))