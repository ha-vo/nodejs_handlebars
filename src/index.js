import express from 'express'
import handlebar from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', handlebar.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log(`Web dang chay ở http://localhost:${port}`))

