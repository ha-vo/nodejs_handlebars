import model from '../models/course.js'
import urlSlug from 'url-slug'
import course from '../models/course.js'

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
        course.save()
            .then((course) => {
                res.redirect('/')
            })
            .catch(error => next(error))
    }

    getShowPage(req, res, next) {
        model.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                res.render('me', { courses })
            })
            .catch(next)
    }

    getEditPage(req, res, next) {
        model.findById({ _id: req.params.id })
            .then(course => {
                course = course.toObject()
                res.render('edit', { course })
            })
    }
    update(req, res, next) {
        model.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/courses')
            })
            .catch(next)
    }
    delete(req, res, next) {
        model.delete({ _id: req.params.id })
            .then(course => {
                res.redirect('back')
            })
            .catch(next)
    }
    getTrashPage(req, res, next) {
        model.findWithDeleted({ deleted: true })
            .then(courses => {
                courses = courses.map(course => course.toObject())
                res.render("trash", { courses })
            })
            .catch(next)

    }
    restore(req, res, next) {
        model.restore({ _id: req.params.id })
            .then(
                res.redirect('back')
            )
            .catch(next)
    }
    deleteComplete(req, res, next) {
        model.deleteOne({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next)
    }
}

export default new CourseController