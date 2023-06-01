const argv = require("yargs-parser")(process.argv.slice(2))
// console.log("argv", argv._)

// @ts-ignore
const nombre =  argv.nombre
const apellido =  argv.apellido
// console.log(`Nombre : ${nombre}, Apellido: ${apellido}`);
/*
* Reutilizar el ejercicio de mandarle como argumento un nombre pero utilizando yargs parser, 
* y buscarlo en el arreglo nombres.
* si si lo encontramos bienvenido, si no fuera de aqui
* La impresion de bienvenido tiene que ser en arcoiris
* Y la impresion de Fuera de aqui, en rojo.
*/