function adminMiddleware(req, res, next) {
    if (req.session.usuarioLogueado.isadmin !=1){
      return res.redirect("/")
    }
    next();
  }
  module.exports = adminMiddleware;