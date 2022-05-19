const express = require ("express")
const path = require ("path")
const app = express ()
const publicPath = path.resolve (__dirname, "../public")
const indexRouter = require ('./routes/indexRouters')

app.set ('view engine', 'ejs')
app.set ('views', path.join(__dirname, './views'));
app.use (express.static(publicPath))

app.use ('/', indexRouter)



console.log(publicPath);

app.listen(3000, () => {console.log("servidor corriendo en el puerto 3000");
})