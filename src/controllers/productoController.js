//modulos
const fs=require('fs');
const path= require('path')
const db= require("../database/models");

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
        db.Producto.findAll({
            include: ['marcas','tipos','contenido']
        })
            .then(productos => {
                res.render('products/nbirras.ejs',{productos})
            })
    },
    producto: function (req, res){
        db.Producto.findByPk(req.params.id,{
            include: ['marcas','tipos','contenido']
        })
            .then(encontrado => {
                res.render('products/producto.ejs', {encontrado});
            })
        
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
    cargaProducto: function (req, res) {
            let promMarca = db.Marca.findAll();
            let promContenido = db.Contenido.findAll();
            let promTipo = db.Tipo.findAll();
            Promise
            .all([promMarca, promContenido, promTipo])
            .then(([marcas, contenidos, tipos]) => {
                console.log(marcas)
                return res.render('products/cargaProducto.ejs', {marcas, contenidos, tipos})})
            .catch(error => res.send(error))
    },
    guardaProducto: function (req, res){
            db.Producto.create(
                {
                    nombre: req.body.nombre,
                    marcas_idmarca: req.body.marca,
                    tipos_idtipo: req.body.sabor,
                    descripcion: req.body.descripcion,
                    abv: parseInt (req.body.abv),
                    ibu: parseInt(req.body.ibu),
                    contenido_idcontenido: req.body.contenido,
                    precio: parseInt (req.body.precio),
                    stock: parseInt (req.body.stock),
                    foto: req.file.filename,
                    descuento: parseInt(req.body.descuento),
                    rating: 0,
                })
            .then(()=> {
                return res.redirect('/products')})            
            .catch(error => res.send(error))
        },
    
    editarProducto: function (req, res){
            let productoId = req.params.id;
            let promProducto = db.Producto.findByPk(productoId,{include: ['marcas','tipos','contenido']});
            let promMarcas = db.Marca.findAll();
            let promTipo = db.Tipo.findAll();
            let promContenido = db.Contenido.findAll();
            Promise
            .all([promProducto, promMarcas, promTipo, promContenido])
            .then(([producto, marcas, tipos, contenido]) => {
                
                return res.render('products/editarProducto.ejs', {producto, marcas, tipos, contenido})})
            .catch(error => res.send(error))

    },

    birraEditada: function (req, res){
      // aca traemos lo que pusimos en el cuerpo del formulario
     let idEditado = req.params.id;
     
      db.Producto.update(
        {
            nombre: req.body.nombre,
            marcas_idmarca: req.body.marca,
            tipos_idtipo: req.body.sabor,
            descripcion: req.body.descripcion,
            abv: parseInt (req.body.abv),
            ibu: parseInt(req.body.ibu),
            contenido_idcontenido: req.body.contenido,
            precio: parseInt (req.body.precio),
            stock: parseInt (req.body.stock),
            foto: req.file.filename,
            descuento: parseInt(req.body.descuento),
            rating: 0,
        },{
            where:{idProductos: idEditado}
        })

    .then(()=> {
        return res.redirect('/products')})            
    .catch(error => res.send(error))
},

        
        

} 
module.exports = productoController;