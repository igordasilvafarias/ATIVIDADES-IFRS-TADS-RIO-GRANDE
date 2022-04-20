DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS produtos;

CREATE TABLE usuarios (
  id        INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome      VARCHAR(20) NOT NULL,
  sobrenome VARCHAR(20)     NULL
);

CREATE TABLE produtos (
  id        INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome      VARCHAR(20) NOT NULL,
  preco     REAL(20)    NULL
);

INSERT INTO usuarios (nome, sobrenome)
VALUES ('Ricardo', 'Pereira');

INSERT INTO usuarios (nome, sobrenome)
VALUES ('Eduardo', 'Silveira');

INSERT INTO usuarios (nome, sobrenome)
VALUES ('Renata', 'Lopes');

INSERT INTO produtos (nome, preco)
VALUES ('Mouse', 1.99);

INSERT INTO produtos (nome, preco)
VALUES ('Teclado', 199);

INSERT INTO produtos (nome, preco)
VALUES ('Monitor', 999);
