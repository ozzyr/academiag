require('dotenv').config()

const express = require('express')
const httpProxy = require('express-http-proxy')
const logger = require('morgan')
const services = require('./services/services')

const app = express();
app.use(logger(process.env.NODE_ENV))

services.forEach(service => {
    const proxy = httpProxy(service.url)
    app.use(service.route, proxy)
})

app.listen(8080)