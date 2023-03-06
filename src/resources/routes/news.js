import NewsController from '../controller/NewsController.js'
import SiteController from '../controller/SiteController.js'

const initWebRoute = (app) => {
    app.get("/", SiteController.index)
}

export default initWebRoute
