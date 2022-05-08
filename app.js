const express = require ("express")
const { request } = require("http")
const { dirname } = require("path")
const path = require ("path")
const app = express ()
const publicPath = path.resolve (__dirname, "./public")
const indexRouter = require ('./routes/indexRouters')

app.set ('view engine', 'ejs')

app.use (express.static(publicPath))

app.use ('/', indexRouter)


/*app.get ('/carrito', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/carrito.html'))
}) */

/*app.get ('/home', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/home.html'))
})*/

/*app.get ('/login', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/login.html'))
}) 

app.get ('/producto', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/producto.html'))
}) 

app.get ('/registro', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/registro.html'))
}) 

/*app.get ('/', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/home.html'))
}) */

/*app.get ('/quienes', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/quienes.html'))
}) 

app.get ('/2', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/home2.html'))
}) */





app.listen(3000, () => {console.log("servidor corriendo en el puerto 3000");
})