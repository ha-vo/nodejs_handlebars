import model from '../models/course.js'
import urlSlug from 'url-slug'

class CourseController {
    show(req, res, next) {
        model.findOne({ slug: req.params.slug })
            .then(course => {
                course = course.toObject()
                res.render('courses/show', { course })
            })
            .catch(error => next(error))
    }
    getCreatePage(req, res, next) {
        res.render('create')
    }
    create(req, res, next) {
        const slug = urlSlug.convert(req.body.name, {
            separator: '-',
            transformer: false
        })
        console.log(slug)
        req.body.image = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`
        req.body.slug = slug
        const course = new model(req.body)
        console.log(req.body)
        course.save()
            .then((course) => {
                res.redirect('/')
            })
            .catch(error => next(error))
    }
}

export default new CourseController