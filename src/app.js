const express = require('express')
const app = express()
const port = 3000
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'
const cors = require('cors')
const routes = require('./routes')

app.use(cors({
  origin: '*'
}))
app.use(routes)

app.listen(port, host, () => {
  console.log(`Kurma listening on http://${host}:${port}`)
})
