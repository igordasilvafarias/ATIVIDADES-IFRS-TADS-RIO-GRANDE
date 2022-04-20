"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var placa_1 = require("./placa");
// 0 = A
// 1 = B
// 2 = C
// 3 = D
// 4 = E
// 5 = F
// 6 = G
// 7 = H
// 8 = I
// 9 = J
test('placa invariável', function () {
    expect(placa_1.placa('IYT1050')).toBe('IYT1A50');
});
test('placa retorna em maiúsculas', function () {
    expect(placa_1.placa('iyt1050')).toBe('IYT1A50');
});
test('placa converte o segundo dígito em letra 5', function () {
    expect(placa_1.placa('iyt1550')).toBe('IYT1F50');
});
test('placa converte o segundo dígito em letra 9', function () {
    expect(placa_1.placa('iyt1950')).toBe('IYT1J50');
});
test('placa deve entrada estar no formato 3 letras e 4 números', function () {
    expect(function () { return placa_1.placa('iyt 1950'); }).toThrow();
    expect(function () { return placa_1.placa('1yt1950'); }).toThrow();
    expect(function () { return placa_1.placa('TTT195T'); }).toThrow();
    expect(function () { return placa_1.placa('TTT195Q'); }).toThrow();
    expect(function () { return placa_1.placa('TTT954'); }).toThrow();
    expect(function () { return placa_1.placa('TTT95488'); }).toThrow();
});
test('placa formato novo não causa exception', function () {
    expect(function () { return placa_1.placa('IRQ1E50'); }).not.toThrow();
});
test('placa formato novo mas não maiúscula causa exception', function () {
    expect(function () { return placa_1.placa('irq1e50'); }).toThrow();
});
//# sourceMappingURL=placa.test.js.map