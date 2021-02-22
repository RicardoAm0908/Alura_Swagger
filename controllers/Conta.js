'use strict';

var utils = require('../utils/writer.js');
var Conta = require('../service/ContaService');

module.exports.contaAgenciaNumeroDigitoSaldoGET = function contaAgenciaNumeroDigitoSaldoGET (req, res, next) {
  var agencia = req.swagger.params['agencia'].value;
  var numero = req.swagger.params['numero'].value;
  var digito = req.swagger.params['digito'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Conta.contaAgenciaNumeroDigitoSaldoGET(agencia,numero,digito,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
