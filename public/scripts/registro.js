window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit',(e)=>{
        let errores = [];

        let tienenQueSerEstosFormatos = /(\.jpg|\.jpeg|\.png|\.gif|\.tiff)$/i;
        let campoEmail = document.querySelector ("#correo");
        let campoClave = document.querySelector ("#clave");
        let esUnCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let campoNombre = document.querySelector ("#nombre");
        let campoApellido = document.querySelector ("#apellido");
        let campoFoto = document.querySelector ("#foto");

        if (campoNombre.value == ""){
            errores.push ("FRUTA MADRE!!, escribí tu nombre")
        }
        else if (campoNombre.value < 2){
            errores.push  ("¿Tu nombre tiene una sola letra? que lo pario")
        }
        if (campoApellido.value == ""){
            errores.push ("FRUTA MADRE!!, escribí tu apellido")
        }
        else if (campoNombre.value < 2){
            errores.push  ("¿Tu apellido tiene una sola letra? que lo pario")        
        }
        if (campoEmail.value == ""){
            errores.push ("Che!! Humano, pone tu correo")
        }
        else if (!campoEmail.value.match (esUnCorreo) ){
            errores.push  ("Pusiste cualquier cosa menos un Email")
        }
        if(campoClave.value == ''){
            errores.push('¿No vas a poner contraseña?');   
        }else if (campoClave.value.length < 8){
            errores.push('La contraseña debe tener al menos 8 caracteres');
        }
        if (!campoFoto.value.match (tienenQueSerEstosFormatos)){
            errores.push ('Te mandamos un VIRUS poque no subiste un formato valido')
        }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul')
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        } else{
            formulario.submit();
        }


    })})