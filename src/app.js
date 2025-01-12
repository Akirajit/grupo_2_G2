// MODULOS EXTERNOS

const express = require ("express")
const app = express ()
const methodOverride = require("method-override");
const session = require('express-session');
const cookieParser = require('cookie-parser')

//PUERTO
const PORT = 4000

//IMPORTANDO MIDDLEWARES
const isLoggedMiddleware = require('./middlewares/isLoggedMiddleware')


// CONFIGURAMOS LA CARPETA ESTATICA
const path = require ("path")
const publicPath = path.resolve (__dirname, "../public")

//IMPORTANDO ROUTERS
const indexRouter = require ('./routes/indexRouters')
const productosRouter = require("./routes/productosRouter")
const usersRouter = require("./routes/usersRouters") 
const apiRouter = require("./routes/apiRouter")
const error404Controller = require("./controllers/error404Controller")

//VIEW ENGINE SETUP
app.set ('view engine', 'ejs')
app.set ('views', path.join(__dirname, './views'));

//MIDDLEWARES
app.use (express.static(publicPath))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use (cookieParser())
app.use(session({
    secret: "Los marcianos existen, yo los vi, yo los vi, yo los vi..." ,
    resave:false,
    saveUninitialized:false
}))
app.use(isLoggedMiddleware);



//RUTAS
app.use ('/', indexRouter)
app.use('/products',productosRouter)
app.use('/users', usersRouter )
app.use('/epa-la-api',apiRouter)

app.use('*', error404Controller.error404)

//SERVER CORRIENDO
app.listen(PORT, () => {console.log(`EPA LA IPA despega en puente intergaláctico nro. ${PORT}`);
})
