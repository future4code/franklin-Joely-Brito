import express from "express"
import cors from "cors"


const app = express()

app.use(cors())

//Nesse backEnd os dados serão mandados para o frontEnd no formato de json
app.use(express.json())
//servidor esta rodando na porta 3003
app.listen(3003, () => console.log("Servidor disponível em 3003"))