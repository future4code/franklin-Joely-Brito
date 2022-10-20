import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import xmlparser from 'express-xml-bodyparser'
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(xmlparser())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/products", userRouter)