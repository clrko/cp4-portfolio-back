const multer = require('multer')
const { picsUploadsPath } = require('../config')

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

module.exports = upload
