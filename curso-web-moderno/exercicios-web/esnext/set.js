// não aceita repetição / não indexado
const times = new Set()
times.add('Flamengo')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo') // não vai add
times.add('vasco') // lanterna

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('vasco') // rebaixado para série C! Kkkkk
console.log(times.has('vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)