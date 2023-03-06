import express from 'express'
import handlebar from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import initWebRoute from './resources/routes/news.js'
import initCourse from './resources/routes/course.js'
import db from './config/db/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

db.connect()
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', handlebar.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

initWebRoute(app)
initCourse(app)

app.listen(port, () => console.log(`Web dang chay ở http://localhost:${port}`))

