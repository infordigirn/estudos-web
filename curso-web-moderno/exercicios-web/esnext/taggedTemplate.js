// Tagged Template - processa um template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra coisa'    
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)
console.log(`Sem a tag *-* ${aluno} está ${situacao}`)