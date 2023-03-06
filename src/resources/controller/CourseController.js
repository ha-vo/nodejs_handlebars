import model from '../models/course.js'
class CourseController {
    show(req, res, next) {
        model.findOne({ slug: req.params.slug })
            .then(course => {
                course = course.toObject()
                res.render('courses/show', { course })
            })
            .catch(error => next(error))
    }
}

export default new CourseController