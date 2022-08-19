import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

//sera feito os endpoints da api
//app.method(path(caminho do endpoint),handler(e a fução que estamos associando ao bater no endpoint))
app.get("base_url/nome do termo", (request:Request, response:Response)=> {
    const variavel = "mensagem que sera retornada ao usuário"
response.status(200).send({message:variavel})
})

app.post('/enviar-nome', (request:Request, response:Response)=> {
    const token = request.headers.authorization
    console.log(token)
    //Ira printar o token passado
    //  parei a aula com 1:37 do vídeo 
})
app.listen(3003, () => {
    console.log("server is running in http://localhost:3003");
});