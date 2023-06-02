/**
 * - Declaracion
 * - Ejecucion / Mandarla a llamar
 * - Referencia
 * 
 * Callback: es una funcion que se pasa como parametro(referencia) 
 * a otra funcion para ejecutarla adentro
 */


// Declaracion
const saludar = () => {
  console.log("Saludar")
}

// Referencia
saludar

// Ejecucion
saludar()


// Callbacks

function avisar() {
  console.log("Ya llegue a la casa ama")
}

function irACasa(callback) {
  console.log("callback aqui", callback);
  console.log("Caminando hacia la casa...")
  callback()
  callback()
  callback()
  callback()
}

// Callback con funcion anonima
irACasa(() => console.log("Ya llegue a la casa ama"));
// Callback declarada
irACasa(avisar);


const fs = {
  readFile: () => { console.log("leyendo un archivo") }
}

fs.readFile();