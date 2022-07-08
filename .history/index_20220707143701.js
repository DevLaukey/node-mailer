const express = require('express')

const app = express()
const port = process.env.PORT || 5001;

app.listen(`Server learning at ${port}`)