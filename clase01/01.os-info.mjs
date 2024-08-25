import { arch, cpus, freemem, platform, totalmem, uptime } from 'node:os'

console.log('Información sistema operativo:')
console.log('Nombre del sistema operativo:', platform())
console.log('Versión del sistema operativo', platform())
console.log('Arquitectura', arch())
console.log('CPUs', cpus()) // <- vamos a poder escalar procesos en Node
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)
