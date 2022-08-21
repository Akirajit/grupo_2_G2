function profileMiddleware(req, res, next) {
    if (res.locals.usuarioLogueado.isadmin==0 && req.params.id != res.locals.usuarioLogueado.id_usuario){
      return res.redirect(`/users/perfil/${res.locals.usuarioLogueado.id_usuario}`)
    }
    next();
  }
  module.exports = profileMiddleware;