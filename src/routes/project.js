const express = require('express')
const connection = require('../helper/db')
const upload = require('../middlewares/upload')

const router = express.Router()

router.get('/', (req, res) => {
  const sqlGetProjects = 'SELECT * FROM project'
  connection.query(sqlGetProjects, (err, projects) => {
    if (err) throw err
    res.send(projects)
  })
})

router.get('/:id', (req, res) => {
  const sqlGetProject = 'SELECT * FROM project WHERE id = ?'
  connection.query(sqlGetProject, [req.params.id], (err, projects) => {
    if (err) throw err
    if (projects.length === 0) {
      return res.status(404).send('Project not found')
    }
    return res.send(projects[0])
  })
})

router.put('/:projectId', upload.single('thumbnail'), (req, res) => {
  const sqlUpdateProject = `UPDATE project SET ? WHERE id = ?`
  const { projectId } = req.params
  const projectData = {
    name: req.body.name,
    short_description: req.body.short_description,
    long_description: req.body.long_description,
    url_github_front: req.body.url_github_front,
    url_github_back: req.body.url_deployed,
    url_deployed: req.body.url_deployed,
    techno: req.body.techno
  }
  if (req.file) {
    projectData.thumbnail = req.file.filename
  }
  connection.query(sqlUpdateProject, [projectData, projectId], (err, stats) => {
    if (err) throw err
    return res.sendStatus(200)
  })
})

router.post('/', upload.single('thumbnail'), (req, res) => {
  const sqlInsertProject = `INSERT INTO project
      (name, short_description, long_description, url_github_front, url_github_back, url_deployed, thumbnail, techno)
    VALUES
      (?,?,?,?,?,?,?,?)`
  const thumbnail = req.file ? req.file.filename : 'placeholder.png'
  const projectData = [
    req.body.name,
    req.body.short_description,
    req.body.long_description,
    req.body.url_github_front,
    req.body.url_github_back,
    req.body.url_deployed,
    thumbnail,
    req.body.techno
  ]
  connection.query(sqlInsertProject, projectData, (err, stats) => {
    if (err) throw err
    return res.sendStatus(201)
  })
})

module.exports = router
