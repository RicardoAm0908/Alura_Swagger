'use strict';


/**
 * Consulta Saldo
 * Consulta o Saldo da conta do Cliente
 *
 * agencia Integer 
 * numero Long 
 * digito Long 
 * authorization String 
 * returns Double
 **/
exports.contaAgenciaNumeroDigitoSaldoGET = function(agencia,numero,digito,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.8008281904610115;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

