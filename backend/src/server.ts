import express from 'express'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(3333)

// rota = conjunto
// recurso = usuario

// metodos http = GET, POST, PUT, DELETE

// GET = buscar uma info
// POST = Criando uma informação
// PUT = editando uma informação
// DELETE = deletando uma informação

// parametros 
// Query Params: http://localhost:3333/users?search=diego
// Rout Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users


// Driver nativo, query builder, ORM
// Object Relational Mapping