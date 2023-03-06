import courseController from '../controller/CourseController.js'

const initCourse = (app) => {
    app.get('/course/:slug', courseController.show)
}

export default initCourse