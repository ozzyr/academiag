const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({ data: { token: 'algumtokenqui' } })
})
app.listen(8081)