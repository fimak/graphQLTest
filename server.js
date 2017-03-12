import express from 'express'

let app  = express()
let port = 3000

app.get('/', (req, res) => {
    res.send('Hello it\'s get request')
})

app.post('/graphql', (req, res) => {
    res.send('Hello! It\'s post request')
})

let server = app.listen(port, () => {
    // let host = server.address().address
    let port = server.address().port

    console.log(server.address())
    console.log('GraphQL listening at http://localhost:%s/', port)
})