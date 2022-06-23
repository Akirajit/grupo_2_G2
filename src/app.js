// INSTALAR Y REQUERIR EXPRESS

const express = require ("express")
const app = express ()
const methodOverride = require("method-override");
const session = require('express-session');

//IMPORTANDO MIDDLEWARES
const isLoggedMiddleware = require('./middlewares/isLoggedMiddleware')


// CONFIGURAMOS LA CARPETA ESTATICA
const path = require ("path")
const publicPath = path.resolve (__dirname, "../public")


const indexRouter = require ('./routes/indexRouters')
const productosRouter = require("./routes/productosRouter")
const users = require("./routes/usersRouters") 
const error404Controller = require("./controllers/error404Controller")

app.set ('view engine', 'ejs')
app.set ('views', path.join(__dirname, './views'));
app.use (express.static(publicPath))

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: "Los marcianos existen, yo los vi, yo los vi, yo los vi..." ,
    resave:false,
    saveUninitialized:false
}))
app.use(isLoggedMiddleware);


app.use ('/', indexRouter)
app.use('/products',productosRouter)
app.use("/users", users )

app.use('*', error404Controller.error404)

app.listen(3000, () => {console.log("servidor corriendo en el puerto 3000");
})
