import express from 'express'
import ConnectionDB from './DB/connectionDB.js'
import { graphqlHTTP } from 'express-graphql'
import  {schema}  from './graphql/schema.js'
import cors from 'cors';
import { config } from 'dotenv';
config({path:"./Config/.env"})

const app = express()
const port = process.env.PORT || 5000

app.use(cors())


app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))



ConnectionDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))