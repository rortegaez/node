console.log("hola mundo")

/*
* globalThis: es una variable global en toda la aplicación. En el navegador apunta a window y en nodejs apunta a global.
*/

globalThis.console.log("hola mundo global")

/*
? Patrón de Diseño Modulos
*/

/*
! es el estilo clásico
CommonJS
*/
const { sum } = require('./sum')

console.log(sum(1,3))


/*
? Patrón de Diseño Modulos
*/