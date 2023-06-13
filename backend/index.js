const main = require('./db');
const express = require('express')

main();
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/contact', require('./routes/contact.js'))
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 