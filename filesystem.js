const fs = require("fs");
// console.log("readFile", fs.readFile);

fs.readFile("./hola.txt", "utf8", (err, data) => {
  // Dentro de la callback

  // Si hay error
  if(err) {
    console.log(err)
    return;
  }
  // Si si leyo bien el contenido
  console.log("Data", data)
})

/**
 * Ejercicio: escribir en este mismo archivo.
 * fs.writeFile
 */