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
        let encontrado = birraid(req.params.id);
        res.render('products/producto', {encontrado});
        
    },
    borrar: function(req, res){
       let productoParaBorrar = productos.find(producto => producto.id == req.params.id)
       let imagenPath = path.join('public/IMAGENES/productos', productoParaBorrar.foto)

        productos = productos.filter (encontrado => encontrado.id != req.params.id);
        const arrayeditado = JSON.stringify(productos, null, " ")
        //borro el producto del json
        fs.writeFileSync(rutaProductos, arrayeditado)

        //borra la imagen del producto
        fs.unlink(imagenPath, (err) => {
            if (err) {
              console.error(err)
              return
            }
          
            //file removed
          })
        
        //redirige a a la vista de productos
        res.redirect("/products")
        

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
            foto: req.file.filename,
            id: Date.now () ,
            descuento: parseInt(req.body.descuento),
            activo: true,
        }
        productos.push(nuevaBirra)
        const birraJSON = JSON.stringify(productos, null, " ")
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
            foto: req.file.filename,
            id: req.params.id,
            descuento: parseInt(req.body.descuento),
            }    
        
       //aca hay que hacer la funcion para quitar el viejo id y pushear el nuevo
       //     (birraid - encontrado) + lataeditada
       let productosmenosuno = productos.filter (encontrado => encontrado.id != req.params.id);
         productosmenosuno.push (lataeditada)
           productos = productosmenosuno
        

       const arrayeditado = JSON.stringify(productos)
       fs.writeFileSync(rutaProductos, arrayeditado)


       res.redirect('/products', );
       
        }

        
        

} 
module.exports = productoController;