
const os = require('node:os')

console.log('Información sistema operativo:')
console.log('Nombre del sistema operativo:', os.platform())
console.log('Versión del sistema operativo', os.platform())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) // <- vamos a poder escalar procesos en Node
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60 )