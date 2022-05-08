const productoController = {
    producto: function (req, res){
        res.render('producto');
    },

    carrito: function (req, res){
        res.render('carrito');
    },
    cargaProducto: function (req, res){
        res.render('cargaProducto');
    }
}
module.exports = productoController;