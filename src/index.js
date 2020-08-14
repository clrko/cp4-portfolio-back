const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const { port, appBaseUrl, picsUploadsPath } = require('./config')
const routes = require('./routes/index')

const app = express()

app.use(morgan('dev'))
app.use(
  cors({
    origin: appBaseUrl || 'http://localhost:3000'
  })
)
app.use(express.json())
app.use('/images', express.static(picsUploadsPath || 'uploads'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use('/project', routes.Project)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
