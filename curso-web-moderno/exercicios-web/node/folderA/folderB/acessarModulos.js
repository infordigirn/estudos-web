const moduloA = require('../../moduloA')
console.log(moduloA.ateLogo)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./folderC/index')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Good Morning!')
//     res.end()
// }).listen(8080)