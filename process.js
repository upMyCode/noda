// console.log(global.process.pid) // ID  процесса этого экземпляра
// console.log(process.versions) // Инфа по движку и версии  Node.js
// console.log(process.arch) // Архитектура системы
// console.log(process.argv) // Аргументы CLI
// console.log(process.env) // Переменные окружения
console.log(process.uptime()); //получает время работы
console.log(process.memoryUsage())// получает объём потребляемой памяти
console.log(process.cwd()) // получает текущую рабочую папку. Не путать с __dirname,
                           // не зависящим от места, из которого был запущен процесс

process.exit(0)  //выходит из текущего процесс. К примеру, можно передать код 0 или 1.

process.on() // прикрепляет на событие, например, `on(‘uncaughtException’)
