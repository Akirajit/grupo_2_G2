function guestMiddleware(req,res,next){
    if(req.session.usuarioLogueado) {
        return res.redirect('/users/perfil/'+req.session.usuarioLogueado.id)
    }
    next()
}
module.exports = guestMiddleware;