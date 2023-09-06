const _ = require('lodash');

const primeiroArray = [23, 9, 4, 45];
const segundoArray = [7, 12];

// Divide o primeiro array em dois arrays
const arraysDivididos = _.chunk(primeiroArray, Math.ceil(primeiroArray.length / 2));

// Concatena cada array dividido com o segundo array
const resultado = arraysDivididos.map(array => _.concat(array, segundoArray));

console.log(resultado);
