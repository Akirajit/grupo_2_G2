window.addEventListener('load', function(){
    let formularioCarga = document.querySelector('form');
    formularioCarga.addEventListener('submit',(e)=>{
        
        let campoName = document.querySelector ("#name");
        let formatosValidos = /(\.jpg|\.jpeg|\.png|\.gif|\.tiff)$/i;
        //let campoEstilo = document.querySelector ("#sabor");
        let campoDescripcion = document.querySelector ("#descripcion");
        let campoFoto = document.querySelector ("#foto");
        let ulErrors = document.querySelector('div.errors ul');
        /*let campoAbv = document.querySelector ("#abv");
        let campoIbu = document.querySelector ("#ibu");
        let campoContenido =  document.querySelector ("#contenido");
        let campoPrecio =  document.querySelector ("#precio")*/

        let errors = [];

        while( ulErrors.hasChildNodes() ){
            ulErrors.removeChild(ulErrors.lastChild);
        }

        if (campoName.value == ""){
            errors.push ("Debes poner un nombre!!!!")
        }
        else if (campoName.value.length < 2){
            errors.push  ("¿Tu nombre tiene una sola letra? la puchaaaa")
        }
        if (campoDescripcion.value == ""){
            errors.push ("Tiene que tener una descripcion !!!!")
        }
        else if (campoDescripcion.value.length < 20){
            errors.push  ("la descripcion debe contener al menos 20 caracteres")        
        }
        if (campoFoto.value==""){
            errors.push ('No subiste ninguna foto!')
        }
        else if (!campoFoto.value.match (formatosValidos)){
            errors.push ('Te mandamos un VIRUS poque no subiste un formato de foto valido!')
        }

        if(errors.length > 0){
            e.preventDefault();

            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li class=error>' + errors[i] + '</li>'
            }
        } else{
            formulario.submit();
        }


    })})