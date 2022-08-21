const db = require("../database/models");

async function isLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;
    let usuarioLogueado = {}
    let loggedUser_id = req.cookies.recordame
    
    if (loggedUser_id){
        await db.Usuario.findByPk(req.cookies.recordame)
          .then((encontrado) => {
            usuarioLogueado = encontrado.dataValues;
            // console.log(usuarioLogueado);
          })
          .catch((error) => res.send(error));
          console.log(usuarioLogueado);
          req.session.usuarioLogueado = usuarioLogueado
    }

    if(req.session && req.session.usuarioLogueado) {
        res.locals.isLogged = true
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }
    // console.log(res.locals.isLogged);
    next()
}
module.exports = isLoggedMiddleware;