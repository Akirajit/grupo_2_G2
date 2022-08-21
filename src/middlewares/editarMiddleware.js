function editarMidleware(req, res, next) {
    if(res.locals.usuarioLogueado.isadmin!=1 && res.locals.usuarioLogueado.id_usuario != req.params.id) {
        return res.redirect("https://c.tenor.com/O5eQ19XUpSoAAAAC/psychedelic-trippy.gif")
       
    }
    next();
  }
  module.exports = editarMidleware;