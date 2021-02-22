'use strict';


/**
 * Cadastra Cliente
 * Cadastra um novo cliente
 *
 * cliente_ Cliente  (optional)
 * returns Cliente
 **/
exports.cadastraCliente = function(cliente_) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senha" : "senha123",
  "cpf" : "12345678900",
  "conta" : [ {
    "transacoes" : [ {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    }, {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    } ],
    "numero" : 789467,
    "id" : 2,
    "saldo" : 101.34,
    "agencia" : 975,
    "digito" : 6
  }, {
    "transacoes" : [ {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    }, {
      "tipo" : "debito",
      "data" : "2000-01-23T04:56:07.000+00:00",
      "valor" : 6.027456183070403,
      "id" : 0
    } ],
    "numero" : 789467,
    "id" : 2,
    "saldo" : 101.34,
    "agencia" : 975,
    "digito" : 6
  } ],
  "id" : 1,
  "titular" : "Janete Silva"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

