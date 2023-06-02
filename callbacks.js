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
// saludar()


// Callbacks

function avisar() {
  console.log("Ya llegue a la casa ama")
}

function irACasa(callback) {
  console.log("callback aqui", callback);
  console.log("Caminando hacia la casa...")
  callback()
}

// // Callback con funcion anonima
// irACasa(() => console.log("Ya llegue a la casa ama"));
// // Callback declarada
// irACasa(avisar);

const koder = {
  seDieronInformes: false,
  seEntrevisto: false,
  sePago: false,
  seInscribio: false
}

const darInformes = (koder, entrevistar) => {
  // Tardo 3 segundos en darle informes al Koder
  let error = null;
  setTimeout(() => {
    koder.seDieronInformes = true;
    // ! -> null, undefined, false
    if(!koder.seDieronInformes) {
      error = "El koder necesita ser informado primero";
    }
    // Solucion
    // callback -> entrevistamelo porque ya se le dieron informes
    console.log("el koder ya se le dieron informes", koder);
    entrevistar(error, koder);
  }, 2000)
}
const seEntrevisto = (koderInformado, pagar) => {
  let error = null
  setTimeout(() => {
    koderInformado.seEntrevisto = true;
    if(!koderInformado.seEntrevisto) {
      error = "El koder necesita ser entrevistado"
    }
    console.log("al koder ya se le entrevisto", koderInformado)
    pagar(error, koderInformado);
  }, 1000)
}

const sePago = (koderEntrevistado, inscribir) => {
  let error = null;
  setTimeout(() => {
    koderEntrevistado.sePago = false;
    if(!koderEntrevistado.sePago) {
      error = "El koder necesita pagar"
    }
    console.log("El koder ya pago", koderEntrevistado);
    inscribir(error, koderEntrevistado)
  }, 2000)
}

const inscribir = (koderPagado) => {
  setTimeout(() => {
    koderPagado.seInscribio = true
    console.log("El koder ya se inscribio!!!!", koderPagado);
  }, 4000)
}
// Callbacks anonimas
darInformes(koder, (error, koderInformado) => {
  if(error) {
    console.log(error)
    return;
  }
  // Koder ya esta informado
  seEntrevisto(koderInformado, (error, koderEntrevistado) => {
    if(error) {
      console.log(error)
      return;
    }
    // Koder ya esta entrevistado
    sePago(koderEntrevistado, (error, koderPagado) => {
      if(error) {
        console.log(error)
        return;
      }
      // Koder ya pago
      inscribir(koderPagado);
    })
  })
});



