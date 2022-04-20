"use strict";
function hello(q) {
    console.log('Hello', q);
}
var quem = 'World';
hello(quem);
console.log(36.15 % 3);
console.log(31.07 % 3);
console.log(Math.trunc(36.15 / 3));
console.log(Math.trunc(31.07 / 3));
var nParcelas = 7;
var valorTotal = 121.21;
var resto = Number(Math.round(parseFloat((valorTotal % nParcelas) + 'e' + 2)) + 'e-' + 2);
var valorInteiro = Math.trunc(valorTotal / nParcelas);
var numero = [];
for (var i = 0; i < nParcelas; i++) {
    if (i < nParcelas - 1)
        numero.splice(i, 0, Math.trunc(valorTotal / nParcelas));
    if (i === nParcelas - 1) {
        numero.splice(i, 0, valorInteiro + resto);
    }
    console.log(i === nParcelas - 1);
}
console.log(numero);
//# sourceMappingURL=main.js.map