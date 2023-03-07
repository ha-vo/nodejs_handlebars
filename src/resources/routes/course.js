import courseController from '../controller/CourseController.js'

const initCourse = (app) => {
    app.get('/course/:slug', courseController.show)
    app.get('/create', courseController.getCreatePage)
    app.post('/course/edit', courseController.create)
    app.get('/me/courses', courseController.getShowPage)
    app.get('/me/courses/:id/edit', courseController.getEditPage)
    app.put('/me/courses/:id', courseController.update)
    app.delete('/delete/:id', courseController.delete)
    app.get('/delete/trash', courseController.getTrashPage)
    app.get('/me/courses/:id/restore', courseController.restore)
    app.delete('/delete/:id/complete', courseController.deleteComplete)
}

export default initCourse