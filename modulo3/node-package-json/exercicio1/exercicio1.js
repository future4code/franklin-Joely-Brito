// Utilizando a propiedade process.argv conseguimos passar os parametros para determinadas funções usando o terminal
const nome = process.argv[2];
const idade = (process.argv[3]);
const soma = (Number(idade) + 7);

if (nome === undefined) {
  return console.log('\033[0;31m%s\x1b[0m', 'Por favor digite seu nome!')
}

if (idade === undefined) {
    return console.log('\033[0;31m%s\x1b[0m', 'Por favor digite seu nome!')
  //return console.log('%c Por favor digite sua idade!', 'color: red;');
}
console.log('\x1b[33m%s\x1b[0m',
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma}`
);
