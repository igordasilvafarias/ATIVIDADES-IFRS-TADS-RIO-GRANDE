"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placa = void 0;
/**
 * Altera placas do padrão antigo para o novo padrão de placas do mercosul e pode retornar as já existentes, neste caso as placas no formato antigo, verifica também pode alterar para maiúscula.
 * Testa o padrão das placas antigas de 3 letras e 4 numeros, e do novo formato também.
 * @param verificaPlaca Verificar a placa que foi inserida
 * @returns retorna a placa no novo padrão
 * @throws lança um erro caso a placa não atender nenhum dos dois padrões
 */
exports.placa = function (verificaPlaca) {
    var letrasPlacas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var resultado = /^[a-zA-Z]{3}\d([A-Z]|\d)\d{2}$/g.exec(verificaPlaca);
    if (resultado)
        if (resultado[1].match(/\d/))
            return verificaPlaca
                .toUpperCase()
                .replace(/(?<=^[a-zA-Z]{3}\d)\d(?=\d{2}$)/g, letrasPlacas[+resultado[1]]);
        else
            return verificaPlaca.toUpperCase();
    throw new Error("Placa Inválida");
};
//# sourceMappingURL=placa.js.map