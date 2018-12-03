const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 1 * * 6', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
    console.log(new Date())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

// setImediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 1
regra.minute = 6

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2', new Date().getMinutes())
})