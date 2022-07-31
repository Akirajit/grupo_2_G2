window.addEventListener("load", function () {
  let formulario = document.querySelector("form");
  let campoEmail = document.querySelector("#correo");
  let campoClave = document.querySelector("#clave");
  let esUnCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let ulErrores = document.querySelector("div.errores ul");

  formulario.addEventListener("submit", function (e) {
    let errores = [];
    while( ulErrores.hasChildNodes() ){
        ulErrores.removeChild(ulErrores.lastChild);
    }

    if (campoEmail.value == "") {
      errores.push("BOLUDO, COMPLETA EL IMEIL");
    } else if (!campoEmail.value.match(esUnCorreo)) {
      errores.push("BOLUDO, NO ES UN FORMATO DE IMEIL");
    }
    if (campoClave.value == "") {
      errores.push("BOLUDO, COMPLETA LA CONTRASEÑA");
    }

    if (errores.length > 0) {
      e.preventDefault();

      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li class=error>" + errores[i] + "</li>";
      }
    }
  });
});
