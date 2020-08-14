const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  appBaseUrl: process.env.APP_BASE_URL,
  picsUploadsPath: process.env.PICS_UPLOADS_PATH
}
