import model from '../models/course.js'
class SiteController {
    index(req, res) {
        model.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                res.render('home', { courses })
            })
            .catch(error => res.send(error))
    }
}

export default new SiteController