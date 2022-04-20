/**
 * Realizar os calculos necessarios para garantir que o parcelamento sempre lance os centavos excedentes para última parcela, deixando as primeiras parcelas com numeros inteiros.
 * @param valorTotal Parametro que armazena o valor total;
 * @param nParcelas Parametro que armazena a quantidade de parcelas;
 * @parcelamento Array que armazena os valores de cada parcela;
 * @throws lança um erro caso o numero de parcelas seja menor a 1 ou maior que 10;
 * @throws lança um erro caso o numero de parcelas seja passado como um numero com virgula, ex.: 2.3;
 * @throws lança um erro caso o valor total seja menor que 1;
 * @throws lança um erro caso o valor total seja menor que o numero de parcelas;
 * @returns retorna o `parcelamento` com os valores das parcelas.
 */
export const parcela = (valorTotal: number, nParcelas: number): number[] => {
  if(nParcelas < 1 || nParcelas > 10) {
    throw new Error(`O número de parcelas deve ser maior do que 1 e máximo 10 \nNúmero de parcelas informado = ${nParcelas}`);
  }
  if (nParcelas % 1 !== 0) {
    throw new Error(`O número de parcelas deve ser um número inteiro \nNúmero de parcelas informado = ${nParcelas}`);
  }
  if(valorTotal < 1) {
    throw new Error(`O valor deve ser maior do que 1 \nValor informado = ${valorTotal}`);
  }
  if(valorTotal < nParcelas) {
    throw new Error("O valor deve ser maior que número de parcelas")
  }

  const resto = Number(Math.round(parseFloat((valorTotal % nParcelas) + 'e' + 2)) + 'e-' + 2)
  const valorInteiro = Math.trunc(valorTotal / nParcelas)
  const parcelamento: number[] = []

  for (let i = 0; i < nParcelas; i++) {
    if (i < nParcelas - 1) parcelamento.splice(i, 0, Math.trunc(valorTotal / nParcelas))
    if (i === nParcelas - 1) {
      parcelamento.splice(i, 0, valorInteiro + resto)
    }
  }
  return parcelamento
}
