import courseController from '../controller/CourseController.js'

const initCourse = (app) => {
    app.get('/course/:slug', courseController.show)
    app.get('/create', courseController.getCreatePage)
    app.post('/course/edit', courseController.create)
    app.get('/me/courses', courseController.getShowPage)
    app.get('/me/courses/:id/edit', courseController.getEditPage)
    app.put('/me/courses/:id', courseController.update)
}

export default initCourse