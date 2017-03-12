import express from 'express'
import schema from './schema'
import { graphql } from 'graphql'
import bodyParser from 'body-parser'

let app  = express()

app.get('/', (req, res) => {
    res.send('Hello it\'s get request')
})

app.use(bodyParser.text({ type: 'application/graphql'}))

app.post('/graphql', (req, res) => {
    graphql(schema, req.body)
        .then((result) => {
            res.send(JSON.stringify(result, null, 2))
        })
})

let server = app.listen(3000, () => {
    let port = server.address().port

    console.log('GraphQL listening at http://localhost:%s/', port)
})