const os = require('os')

console.log('Operation system', os.platform())
console.log('Proc', os.arch())
console.log(' Info Proc', os.cpus())
console.log('Rum', os.freemem())
console.log(' Over Rum', os.totalmem())
console.log(' Home dir', os.homedir())
console.log(' This System is turn on', os.uptime())