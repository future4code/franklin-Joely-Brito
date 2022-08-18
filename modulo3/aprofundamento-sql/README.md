###Exercício 1
**a)** ALTER TABLE Actor DROP COLUMN salary: apaga a coluna salary existente na tabela Actor.
**b)** ALTER TABLE Actor CHANGE gender sex VARCHAR(6): Estou redeclarando a coluna gender para sex.
**c)** ALTER TABLE Actor CHANGE gender gender VARCHAR(255): Esta redeclarando a coluna gender para aceitar agora ate 255 caracteres.

###Exercício 2
**a)** UPDATE Actor SET name = "João Grillo" WHERE id = "003";
**b)** SELECT UPPER(name) FROM Actor WHERE id = "005";
    SELECT LOWER(name) FROM Actor WHERE id = "005"; 
**c)** UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
**d)** UPDATE Actor SET name = "Josefina" WHERE id = "022": Ele não apresenta nenhum erro visível na tela pois como não encontrou o id "022" ele não atualiza nada. 

###Exercício 3
**a)** DELETE FROM Actor WHERE name = "Fernanda Montenegro";
**b)** DELETE FROM Actor WHERE gender = "male" AND salary >1000000;