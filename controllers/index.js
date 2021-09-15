const express =require('express');


function home(req, res, next) {
    res.render('index', { title: 'Que ondi' });
};
function suma(req, res, next){
    res.send("La suma es");
}
module.exports = {
    home,suma
}