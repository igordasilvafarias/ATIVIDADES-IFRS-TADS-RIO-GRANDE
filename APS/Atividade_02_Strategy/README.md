# Avaliação #02 Open/Close Principle & Strategy

Considere a seguinte situação:

```typescript
const jog3 = new Jogador('Peter', 'arqueiro', 70)
console.log(jog3.arma) // desarmado
jog3.pega('arco')
jog3.ataca(jog1)
console.log(jog1.vida) // 40
jog3.pega('faca')
jog3.ataca(jog1)
console.log(jog1.vida) // 30
```

Como o projeto poderia ser estendido, para aceitar novos personagens e, principalmente, armas, respeitando o OCP?

A tarefa é identificar o algoritmo variável e separá-lo usando o Padrão de Projeto Estratégia.

Para avaliar, experimente introduzir uma nova arma com regras específicas. Isto deve ser possível por adicionar novas classes (e uma alteração no `main.ts`) e só, não devem ser necessárias alterações em classes estáveis, como `Jogador`.

## Desafios (extras)

- E se o jogador pode portar duas armas?
- E se nem tudo é arma? Por exemplo, e se o item pode ser usado para curar?
- O jogador pode atacar a si mesmo?