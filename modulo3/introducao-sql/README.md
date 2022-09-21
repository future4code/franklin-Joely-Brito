### Exercício 1 :books:
**a)** CREATE TABLE Actor : criado a tabela Atores.
id VARCHAR(255) PRIMARY KEY: o varchar indica uma string de 255 caracteres.
name VARCHAR(255) NOT NULL: o varchar indica uma string de 255 caracteres.
salary FLOAT NOT NULL: o float indica que pode receber um número não inteiro.
birth_date DATE NOT NULL: recebe uma data no formato ano/mes/dia.
gender VARCHAR(6) NOT NULL: o varchar indica uma string de 6 caracteres.);

**b)** SHOW DATABASES: retorna o nome do banco de dados presente no sistema.
SHOW TABLES: Mostrar as tabelas do banco de dados atual.


**c)** DESCRIBE Actor: retorna os parametros criados na tabela Actor.
### Exercício 2 :books:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male"),
**a)** ("002", "Glória Pires", 1200000, "1963-08-23", "female"),
**b)**("002", "Glória Pires", 1200000, "1963-08-23", "female"):  o erro retornado foi "Entrada duplicada '002' para a chave 'PRIMARY' ", isso e devido por que ja existe o id 002.
("003", "Fernanda Montenegro", 300000, "1929-10-19", "female").,
("004", "Antônio Fagundes", 400000, "1949-04-18", "male"),
("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

INSERT INTO Actor (id, name, salary)
VALUES("003" ,"Fernanda Montenegro", 300000, "1929-10-19", "female");
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES("004", 400000, "1949-04-18", "male");
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, 1979-03-26, "female");
### Exercício 3 :books:
**a)** SELECT * FROM Actor WHERE gender="female";
**b)** SELECT salary, name FROM Actor WHERE name="Tony Ramos";

**c)** SELECT * from Actor WHERE gender="invalid": nenhum resultado e retornado pois nada foi declarado como invalido.

**d)** SELECT id, name, salary FROM Actor WHERE salary < 500000;

**e)** SELECT id, nome from Actor WHERE id = "002": Coluna desconhecida 'nome', não existe a coluna nome e sim a coluna name.
SELECT id, name from Actor WHERE id = "002": essa sim será a forma correta de buscar a coluna name e id.

### Exercício 4 :books:
**a)** SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000: retornar todos os atores e atrizes que começarem o nome com "A" ou "J".

**b)** SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

**c)** SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

**d)** SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

### Atividade 5 :books:
**a)** CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT,
data_lancamento DATE NOT NULL,
avaliacao INTEGER
): cria uma tabela chamada Filmes e passa como parametros o id, name, sinopse, data_lancamento e avaliacao.

INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
**b)** VALUES("001", "Se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
**c)** ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
**d)** ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
**e)** ("004", "O Auto da Compadecida", "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.", "2000-10-09", 10);

### Atividade 6 :books:
**a)** SELECT id, name, avaliacao FROM Filmes WHERE id = "003";
**b)** SELECT * FROM Filmes WHERE name = "O Auto da Compadecida";
**c)** SELECT id, name, sinopse FROM Filmes WHERE avaliacao >=7;

### Atividade 7 :books:
**a)** SELECT * FROM Filmes WHERE name LIKE "%vida%";

**b)** SELECT * FROM Filmes WHERE name LIKE "%maldade%" OR sinopse LIKE "%bondade%";

**c)** SELECT * FROM Filmes WHERE data_lancamento < "2022-08-16";

**d)** SELECT * FROM Filmes WHERE data_lancamento < "2020-05-04" AND (name LIKE "%tarde%" OR sinopse LIKE "%compadecida%") AND avaliacao > 7;