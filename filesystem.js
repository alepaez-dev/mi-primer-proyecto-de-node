const fs = require("fs");

// fs.readFile("./hola.txt", "utf8", (err, data) => {
//   // Dentro de la callback

//   // Si hay error
//   if(err) {
//     console.log(err)
//     return;
//   }
//   // Si si leyo bien el contenido
//   console.log("Data", data)
// })

/**
 * Ejercicio: escribir en este mismo archivo.
 * fs.writeFile
 */

const leerArchivo = (archivo) => {
  console.log("Esta es la ruta que voy a leer ->>>>", archivo)

  // directory/nomre-del-archvi
  fs.readFile(archivo, "utf8", (err, data) => {
    // Dentro de la callback
  
    // Si hay error
    if(err) {
      console.log(err)
      return;
    }
    // Si si leyo bien el contenido
    console.log("Data", data)
  })
}
fs.readdir("directory/", "utf8", (err, files) => {
  if(err) {
    console.log(err)
    return
  }
  // si no hay error
  console.log("files", files)
  files.forEach(file => {
    leerArchivo(`directory/${file}`)
  })
})
