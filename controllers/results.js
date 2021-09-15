const express = require('express');

// RESTFULL => GET, POST, PUT, PATCH, DELETE 
// Modelo = (Una estructura de datos que representa una enditidad del mundo real)
function index(req, res, next) {
    res.send('Bienvenido a la calculadora');
  };

function suma(req, res, next){
  var n1 = Number(req.params.n1);
  var n2 = Number(req.params.n2);
  res.send(`La suma de ${n1} y ${n2} es ${(n1+n2)}`);
}

function multiplicar(req, res, next){
  var n1 = Number(req.query.n1);
  var n2 = Number(req.query.n2);
  res.send(`La multiplicacion de ${n1} y ${n2} es ${(n1*n2)}`);
}

function dividir(req, res, next){
  var n1 = Number(req.query.n1);
  var n2 = Number(req.query.n2);
  res.send(`La division de ${n1} y ${n2} es ${(n1/n2)}`);
}

function potencia(req, res, next){
  var n1 = Number(req.query.n1);
  var n2 = Number(req.query.n2);
  var resp = Math.pow(n1,n2);
  res.send(`La potencia de ${n1} a la ${n2} es ${resp}`);
}

function restar(req, res, next){
  var n1 = Number(req.params.n1);
  var n2 = Number(req.params.n2);
  res.send(`La resta de ${n1} y ${n2} es ${(n1-n2)}`);
}

module.exports = {
    index, suma, multiplicar, dividir, potencia, restar
}

