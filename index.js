const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const { port } = require('./config')
const routes = require('./src/routes/index')

const app = express()

app.use(morgan('dev'))
app.use(cors({
  origin: process.env.CLIENT_PUBLIC_URL || 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/project', routes.Project)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
