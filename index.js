const argv = require("yargs-parser")(process.argv.slice(2))
// console.log("argv", argv._)

// @ts-ignore
const nombre =  argv.nombre
const apellido =  argv.apellido
console.log(`Nombre : ${nombre}, Apellido: ${apellido}`);
/*
* Reutilizar el ejercicio de mandarle como argumento un nombre pero utilizando yargs parser, 
* y buscarlo en el arreglo nombres.
* si si lo encontramos bienvenido, si no fuera de aqui
* La impresion de bienvenido tiene que ser en arcoiris
* Y la impresion de Fuera de aqui, en rojo.
*/

// @ts-ignore

const nombre = process.argv[2];
const nombres = [
  "Andres", 
  "Andres de Anda", 
  "Christian",
  "Damian",
  "Dani",
  "Diego",
  "Dan",
  "Gustavo",
  "Ignacio",
  "Jorge",
  "Karla",
  "Lau",
  "Luis",
  "Mara",
  "Max",
  "Pao",
  "Roberto",
  "Samantha"
]

const findName = (nombre) => {
  console.log("Estamos en la funcion findName con el nombnre =>", nombre);
  const existe = nombres.includes(nombre) // true or false
  if(existe) {
    console.log("Bienvenido")
    return
  } 
  console.log("Fuera de aqui")
}

findName(nombre)