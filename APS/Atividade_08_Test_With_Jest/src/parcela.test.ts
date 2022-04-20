import { parcela } from "./parcela";

test("valor total menor que 1.00", () => {
  expect(() => parcela(0.1, 5)).toThrow();
});

test("valor total menor que 1.00 por parcela", () => {
  expect(() => parcela(1.5, 5)).toThrow();
});

test("parcelas menor que 1", () => {
  expect(() => parcela(1.5, 0)).toThrow();
});

test("parcelas maior que 10", () => {
  expect(() => parcela(1.5, 12)).toThrow();
});

test("parcelas com numeros com virgula", () => {
  expect(() => parcela(1.5, 5.5)).toThrow();
});

test("Testes parcelamentos", () => {
  expect(parcela(36.15, 3)).toStrictEqual([12, 12, 12.15]);
  expect(parcela(31.07, 3)).toStrictEqual([10, 10, 11.07]);
  expect(parcela(131.1, 10)).toStrictEqual([13, 13, 13, 13, 13, 13, 13, 13, 13, 14.1]);
  expect(parcela(1, 1)).toStrictEqual([1]);
  expect(parcela(6.6, 6)).toStrictEqual([1, 1, 1, 1, 1, 1.6]);
  expect(parcela(25.50, 5)).toStrictEqual([5, 5, 5, 5, 5.50]);
  expect(parcela(1.1, 1)).toStrictEqual([1.1]);
  expect(parcela(144.4444, 4)).toStrictEqual([36, 36, 36, 36.44]);
  expect(parcela(2.4, 2)).toStrictEqual([1, 1.4]);
  expect(parcela(121.21, 7)).toStrictEqual([17, 17, 17, 17, 17, 17, 19.21]);
});
