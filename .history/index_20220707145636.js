const express = require('express')
// import local route
const mailRouter = require('./routes/mailRouter')
const app = express()
const port = process.env.PORT || 5001;

app.listen(`Server learning at ${port}`)