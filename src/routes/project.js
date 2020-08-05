const express = require('express')

const connection = require('../helper/db')

const router = express.Router()

router.get('/', (req, res) => {
  const sqlGetProjects = 'SELECT * FROM project'
  connection.query(sqlGetProjects, (err, projects) => {
    if (err) throw err
    res.status(200).send(projects)
  })
})

module.exports = router
