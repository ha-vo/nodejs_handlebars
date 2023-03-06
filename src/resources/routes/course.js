import courseController from '../controller/CourseController.js'

const initCourse = (app) => {
    app.get('/course/:slug', courseController.show)
    app.get('/create', courseController.getCreatePage)
    app.post('/course/edit', courseController.create)
}

export default initCourse