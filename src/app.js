// INSTALAR Y REQUERIR EXPRESS

const express = require ("express")
const app = express ()
const methodOverride = require("method-override");

// CONFIGURAMOS LA CARPETA ESTATICA

const path = require ("path")
const publicPath = path.resolve (__dirname, "../public")
const indexRouter = require ('./routes/indexRouters')
const productosRouter = require("./routes/productosRouter")
const methodOverride = require("method-override");
const multer = require ('multer');


app.set ('view engine', 'ejs')
app.set ('views', path.join(__dirname, './views'));
app.use (express.static(publicPath))

app.use ('/', indexRouter)
app.use('/products',productosRouter)

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(3000, () => {console.log("servidor corriendo en el puerto 3000");
})
