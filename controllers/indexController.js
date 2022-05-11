const indexController = {
    home: function (req, res){
        res.render('home');
    },
    quienes: function (req, res){
        res.render('quienes');
    },
    home2: function (req, res){
        res.render('home2');
    },
    nbirras: function (req, res){
        res.render('products/nbirras');
    }

}
module.exports= indexController;
