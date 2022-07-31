window.addEventListener('load', function(){


    let formulario = document.querySelector("form");
    formulario.addEventListener("submit", function(e){
        let errores = [];


        let campoEmail = document.querySelector ("#correo");
        let campoClave = document.querySelector ("#clave");
        let esUnCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

        if (campoEmail.value == "" ){
            errores.push ("BOLUDO, COMPLETA EL IMEIL")
        } 
        else if (!campoEmail.value.match (esUnCorreo)){
            errores.push ("BOLUDO, NO ES UN FORMATO DE IMEIL")
        }
        if (campoClave.value == "" ){
            errores.push ("BOLUDO, COMPLETA LA CONTRASEÑA")
        }

        if(errores.length > 0){
            e.preventDefault();
            
            let ulErrores = document.querySelector('div.errores ul')
                for (let i = 0; i < errores.length; i++) {
                    ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
                }
        }


    });

})