const express = require('express')
const multer = require('multer')
const connection = require('../helper/db')
const { picsUploadsPath } = require('../../config')

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsPath = picsUploadsPath || 'uploads'
    cb(null, uploadsPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('This type of file is not supported'), null, false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
})

router.get('/', (req, res) => {
  const sqlGetProjects = 'SELECT * FROM project'
  connection.query(sqlGetProjects, (err, projects) => {
    if (err) throw err
    res.status(200).send(projects)
  })
})

router.post('/', upload.single('thumbnail'), (req, res) => {
  const sqlInsertProject = `INSERT INTO project
      (name, short_description, long_description, url_github_front, url_github_back, url_deployed, thumbnail, techno)
    VALUES
      (?,?,?,?,?,?,?,?)`
  const thumbnail = req.file ? req.file.path : 'placeholder.png'
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
    return res.sendStatus(200)
  })
})

module.exports = router
