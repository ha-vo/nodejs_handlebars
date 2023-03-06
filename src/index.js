import express from 'express'
import handlebar from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import initWebRoute from './resources/routes/news.js'
import initCourse from './resources/routes/course.js'
import db from './config/db/index.js'
import methodOverride from 'method-override'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

db.connect()
app.engine('hbs', handlebar.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

initWebRoute(app)
initCourse(app)

app.listen(port, () => console.log(`Web dang chay ở http://localhost:${port}`))

