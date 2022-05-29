//modulos
const fs=require('fs');
const path= require('path')

//leyendo el json de productos
const rutaProductos = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(rutaProductos,'utf-8'));


// con esto buscamos por id las birritas
function birraid (idlata){
    let lata = {};
         for (let i = 0; i<productos.length;i++){
            if (idlata == (productos[i].id)){
              lata = productos[i];
                break;
            }
        }
        return lata;
}


const productoController = {
    todos: function(req,res){
        res.render('products/nbirras', {productos})
    },
    producto: function (req, res){
        res.render('products/producto');
    },
    carrito: function (req, res){
        res.render('products/carrito');
    },
    cargaProducto: function (req, res){
        res.render('products/cargaProducto');
    },
    guardaProducto: function (req, res){
        let nuevaBirra = {
            NOMBRE: req.body.nombre,
            MARCA: req.body.marca,
            DESCRIPCION: req.body.descripcion,
            ABV: req.body.ABV,
            IBU: req.body.IBU,
            CONTENIDO: req.body.contenido,
            PRECIO: req.body.precio,
            STOCK: req.body.stock,
            FOTO: '/imagenes/productos/'+req.file.filename,
            ID: Date.now(),
            DESCUENTO: req.body.descuento,
        }
        productos.push(nuevaBirra)
        const birraJSON = JSON.stringify(productos)
        fs.writeFileSync(rutaProductos, birraJSON)
        res.redirect('/products');
    },
    
    editarProducto: function (req, res){
        let encontrado = birraid(req.params.id);
    res.render("products/editarProducto", {encontrado});
    },

   /* birraEditada: function (req, res){
       aca traemos lo que pusimos en el cuerpo del formulario
        let lataeditada = {
            NOMBRE: req.body.nombre,
            MARCA: req.body.marca,
            DESCRIPCION: req.body.descripcion,
            ABV: req.body.ABV,
            IBU: req.body.IBU,
            CONTENIDO: req.body.contenido,
            PRECIO: req.body.precio,
            STOCK: req.body.stock,
            FOTO: '/imagenes/productos/'+req.file.filename,
            ID: Date.now(),
            DESCUENTO: req.body.descuento,
            
            */
        
       //aca hay que hacer la funcion para quitar el viejo id y pushear el nuevo

       //     birraid - encontrado + lataeditada

       //


        //res.redirect ("products")


        




        //res.render('products/editarProducto');

} 
module.exports = productoController;