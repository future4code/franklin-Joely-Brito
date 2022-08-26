# Atividade 1
**a)** Uma chave estrangeira (foreign key) estabele um relacionamento entre duas tabelas. E um código que irá especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada.

**b)** Verificar o arquivo `index.ts` que contém o método que cria a tabela Rating. As avaliações foram adicionadas pelo mySQL workbench com a escrita `INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "Filme Perfeito", 9, "004"), 
("002", "Realista", 9, "001"),
("003", "Engraçado", 9, "002");`

**c)** `Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails`. Não foi possível adicionar a avaliação ao filme pois a chave estrangeira e falha(não existe).

**d)** A tabela Filmes foi alterada e excluída a coluna avaliacao pelo comando `ALTER TABLE Filmes DROP COLUMN avaliaca` rodado no mySQL workbench;

**e)** `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails `, o erro em questão apareceu por que não e possível excluir um filme que ja possui avaliação registrada em outra tabela, pois ja foi configurada a relção de dependência entre ambas.

# Atividade 2
**a)** `CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);`
A tabela MovieCast estabelece uma ligação com as tabelas filmes e Actor,  

**b)** Criação da tabela: `index.ts`.
Populando a tabela pelo mySQL workbench: `INSERT INTO MovieCast (movie_id, actor_id) 
VALUES ("001", "001"), ("002", "002"), ("004", "004"), ("004", "003"), ("001", "005"), ("002", "003");` 

**c)** `Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails`: não e possivel adicionar uma nova pessoa na tabela pois foi passado uma chave que não existe.

**d)** `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails `, o erro em questão apareceu por que não e possível excluir um ator que ja possui avaliação registrada em outra tabela, pois ja foi configurada a relção de dependência entre ambas.

# Atividade 3
**a)** `ON` = `ONDE`: Ele faz a igualdade que diz que `Movie.id = Rating.movie_id`.

**b)** `SELECT f.id as filme_id, r.rate as nota, f.name as filme FROM Filmes f
INNER JOIN Rating r on f.id = r.movie_id;` o `as` funciona como um registro de novo nome para algo ja existente. 