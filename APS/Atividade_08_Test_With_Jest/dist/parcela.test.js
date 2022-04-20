"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parcela_1 = require("./parcela");
test("valor total menor que 1.00", function () {
    expect(function () { return parcela_1.parcela(0.1, 5); }).toThrow();
});
test("valor total menor que 1.00 por parcela", function () {
    expect(function () { return parcela_1.parcela(1.5, 5); }).toThrow();
});
test("parcelas menor que 1", function () {
    expect(function () { return parcela_1.parcela(1.5, 0); }).toThrow();
});
test("parcelas maior que 10", function () {
    expect(function () { return parcela_1.parcela(1.5, 12); }).toThrow();
});
test("parcelas com numeros com virgula", function () {
    expect(function () { return parcela_1.parcela(1.5, 5.5); }).toThrow();
});
test("Testes parcelamentos", function () {
    expect(parcela_1.parcela(36.15, 3)).toStrictEqual([12, 12, 12.15]);
    expect(parcela_1.parcela(31.07, 3)).toStrictEqual([10, 10, 11.07]);
    expect(parcela_1.parcela(131.1, 10)).toStrictEqual([13, 13, 13, 13, 13, 13, 13, 13, 13, 14.1]);
    expect(parcela_1.parcela(1, 1)).toStrictEqual([1]);
    expect(parcela_1.parcela(6.6, 6)).toStrictEqual([1, 1, 1, 1, 1, 1.6]);
    expect(parcela_1.parcela(25.5, 5)).toStrictEqual([5, 5, 5, 5, 5.5]);
    expect(parcela_1.parcela(1.1, 1)).toStrictEqual([1.1]);
    expect(parcela_1.parcela(144.4, 4)).toStrictEqual([36, 36, 36, 36.4]);
    expect(parcela_1.parcela(2.4, 2)).toStrictEqual([1, 1.4]);
    expect(parcela_1.parcela(121.21, 7)).toStrictEqual([36, 36, 36, 36.4]);
});
//# sourceMappingURL=parcela.test.js.map