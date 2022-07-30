window.addEventListener('load', function(){

    let formulario = document.querySelector("form");
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let campoEmail = document.querySelector ("#correo");
        let campoClave = document.querySelector ("#clave");

        if (campoEmail.value == "" )
            alert ("BOLUDO, COMPLETA EL IMEIL ϟϙϡϠͳϚϽͷϐϟ")
        else {
            formulario.submit()
        }    



    });




})