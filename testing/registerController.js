const registerController ={
    registro: function (req, res){
        res.render('users/registro');
    },

    login: function (req, res){
        res.render('users/login');
    }
}
module.exports = registerController;