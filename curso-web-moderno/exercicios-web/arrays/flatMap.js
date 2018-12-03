const escola = [{
    nome: 'Turma M1',
    alunos: [{ 
        nome: 'João', nota: 7.3
    },{ 
        nome: 'Maria', nota: 9.2
    }]
},{
    nome: 'Turma M2',
    alunos: [{ 
        nome: 'Pedro', nota: 9.8
    },{ 
        nome: 'Ana', nota: 8.7 
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

// juntar em um único array sem flatMap
console.log([].concat([ 7.3, 9.2 ], [ 9.8, 8.7 ]))

// com flatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)