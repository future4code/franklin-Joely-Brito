###Exercício 1 :ice_cube:
**a)** ALTER TABLE Actor DROP COLUMN salary: apaga a coluna salary existente na tabela Actor.
**b)** ALTER TABLE Actor CHANGE gender sex VARCHAR(6): Estou redeclarando a coluna gender para sex.
**c)** ALTER TABLE Actor CHANGE gender gender VARCHAR(255): Esta redeclarando a coluna gender para aceitar agora ate 255 caracteres.

###Exercício 2 :ice_cube:
**a)** UPDATE Actor SET name = "João Grillo" WHERE id = "003";
**b)** SELECT UPPER(name) FROM Actor WHERE id = "005";
    SELECT LOWER(name) FROM Actor WHERE id = "005"; 
**c)** UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
**d)** UPDATE Actor SET name = "Josefina" WHERE id = "022": Ele não apresenta nenhum erro visível na tela pois como não encontrou o id "022" ele não atualiza nada. 

###Exercício 3 :ice_cube:
**a)** DELETE FROM Actor WHERE name = "Fernanda Montenegro";
**b)** DELETE FROM Actor WHERE gender = "male" AND salary >1000000;

###Exercício 4 :ice_cube:
**a)** SELECT MAX(salary) FROM Actor;
**b)** SELECT MIN(salary) FROM Actor WHERE gender = "female";
**c)** SELECT COUNT(*) FROM Actor WHERE gender = "female";
**d)** SELECT SUM(salary) FROM Actor;

###Exercício 5 :ice_cube:
**a)** Ele retorna a quantidade de pessoas de cada sexo registrado na tabela Actor.
**b)** SELECT * FROM Actor ORDER BY name, id DESC;
**c)** SELECT * FROM Actor ORDER BY salary ASC;
**d)** SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
**e)** SELECT AVG(salary), gender FROM Actor GROUP BY gender;

###Exercício 6 :ice_cube:
**a)** ALTER TABLE Filmes ADD Ultima_exibicao DATE;
**b)** ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
**c)** UPDATE Filmes SET ultima_exibicao = "2020-02-29" WHERE id = "004";
 UPDATE Filmes SET ultima_exibicao = "2022-08-25" WHERE id = "002";
**d)**  DELETE FROM Filmes WHERE id = "003";
 UPDATE Filmes SET sinopse = "Romance em trio" WHERE id = "003";
 ERROR: não mostra um erro aparente pois não consegue atualizar algo que não existe.