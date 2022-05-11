const productoController = {
    producto: function (req, res){
        res.render('products/producto');
    },
    carrito: function (req, res){
        res.render('products/carrito');
    },
    cargaProducto: function (req, res){
        res.render('products/cargaProducto');
    },
    editarProducto: function (req, res){
        res.render('products/editarProducto');

} }
module.exports = productoController;