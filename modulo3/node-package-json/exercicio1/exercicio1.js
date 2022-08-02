
// Utilizando a propiedade process.argv conseguimos passar os parametros para determinadas funções usando o terminal
const nome = process.argv[2]
const idade = Number(process.argv[3])
const soma = Number(idade + 7)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma}`)