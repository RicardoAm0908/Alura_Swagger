'use strict';

var utils = require('../utils/writer.js');
var Cliente = require('../service/ClienteService');

module.exports.cadastraCliente = function cadastraCliente (req, res, next) {
  var cliente_ = req.swagger.params['cliente_'].value;
  Cliente.cadastraCliente(cliente_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
