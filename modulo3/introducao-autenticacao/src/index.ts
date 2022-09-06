import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { IdGenerator } from "./services/IdGeneration"

const generator = new IdGenerator().generateId()
console.log(generator)

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)