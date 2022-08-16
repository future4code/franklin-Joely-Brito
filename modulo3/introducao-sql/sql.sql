CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male"),
("002", "Glória Pires", 1200000, "1963-08-23", "female"),
("002", "Glória Pires", 1200000, "1963-08-23", "female"),
("003", "Fernanda Montenegro", 300000, "1929-10-19", "female"),
("004", "Antônio Fagundes", 400000, "1949-04-18", "male"),
("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

INSERT INTO Actor (id, name, salary)
VALUES("003" ,"Fernanda Montenegro", 300000, "1929-10-19", "female");
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES("004", 400000, "1949-04-18", "male");
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, 1979-03-26, "female");

SELECT * FROM Actor WHERE gender="female";
SELECT salary, name FROM Actor WHERE name="Tony Ramos";

SELECT * from Actor WHERE gender="invalid";

SELECT id, name, salary FROM Actor WHERE salary < 500000;

SELECT id, nome from Actor WHERE id = "002";

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT,
data_lancamento DATE NOT NULL,
avaliacao INTEGER
);

INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES("001", "Se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
("004", "O Auto da Compadecida", "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.", "2000-10-09", 10);

SELECT id, name, avaliacao FROM Filmes WHERE id = "003";
SELECT * FROM Filmes WHERE name = "O Auto da Compadecida";
SELECT id, name, sinopse FROM Filmes WHERE avaliacao >=7;

SELECT * FROM Filmes WHERE name LIKE "%vida%";

SELECT * FROM Filmes WHERE name LIKE "%maldade%" OR sinopse LIKE "%bondade%";

SELECT * FROM Filmes WHERE data_lancamento < "2022-08-16";

 SELECT * FROM Filmes WHERE data_lancamento < "2020-05-04" AND (name LIKE "%tarde%" OR sinopse LIKE "%compadecida%") AND avaliacao > 7;