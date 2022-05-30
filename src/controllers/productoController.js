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
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            abv: parseInt (req.body.abv),
            ibu: parseInt(req.body.ibu),
            contenido: req.body.contenido,
            precio: parseInt (req.body.precio),
            stock: parseInt (req.body.stock),
            foto: '/imagenes/productos/'+req.file.filename,
            id: Date.now () ,
            descuento: parseInt(req.body.descuento),
            activo: true,
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

    birraEditada: function (req, res){
      // aca traemos lo que pusimos en el cuerpo del formulario
        let lataeditada = {
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            abv: parseInt (req.body.abv),
            ibu: parseInt(req.body.ibu),
            contenido: req.body.contenido,
            precio: parseInt (req.body.precio),
            stock: parseInt (req.body.stock),
            foto: '/imagenes/productos/'+req.file.filename,
            id: req.params.id,
            descuento: parseInt(req.body.descuento),
            }    
        
       //aca hay que hacer la funcion para quitar el viejo id y pushear el nuevo
       //     (birraid - encontrado) + lataeditada
       let productosmenosuno = productos.filter (encontrado => encontrado.id != req.params.id);
         productosmenosuno.push (lataeditada)
           productos = productosmenosuno
        console.log (productos)

       const arrayeditado = JSON.stringify(productos)
       fs.writeFileSync(rutaProductos, arrayeditado)


       res.redirect('/products', );
       
        }

        
        

} 
module.exports = productoController;