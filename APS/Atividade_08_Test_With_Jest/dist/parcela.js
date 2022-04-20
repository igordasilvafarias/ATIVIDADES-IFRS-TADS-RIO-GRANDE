"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parcela = void 0;
exports.parcela = function (valorTotal, nParcelas) {
    if (nParcelas < 1 || nParcelas > 10) {
        throw new Error("O n\u00FAmero de parcelas deve ser maior do que 1 e m\u00E1ximo 10 \nN\u00FAmero de parcelas informado = " + nParcelas);
    }
    if (nParcelas % 1 !== 0) {
        throw new Error("O n\u00FAmero de parcelas deve ser um n\u00FAmero inteiro \nN\u00FAmero de parcelas informado = " + nParcelas);
    }
    if (valorTotal < 1) {
        throw new Error("O valor deve ser maior do que 1 \nValor informado = " + valorTotal);
    }
    if (valorTotal < nParcelas) {
        throw new Error("O valor deve ser maior que número de parcelas");
    }
    var resto = Number(Math.round(parseFloat((valorTotal % nParcelas) + 'e' + 2)) + 'e-' + 2);
    var valorInteiro = Math.trunc(valorTotal / nParcelas);
    var parcelamento = [];
    for (var i = 0; i < nParcelas; i++) {
        if (i < nParcelas - 1)
            parcelamento.splice(i, 0, Math.trunc(valorTotal / nParcelas));
        if (i === nParcelas - 1) {
            parcelamento.splice(i, 0, valorInteiro + resto);
        }
    }
    return parcelamento;
};
//# sourceMappingURL=parcela.js.map