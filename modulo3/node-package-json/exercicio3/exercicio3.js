const tarefas = ["Estudar", "Lavar Louça"];
const novaTarefa = process.argv[2];

tarefas.push(novaTarefa);
console.table(tarefas);
