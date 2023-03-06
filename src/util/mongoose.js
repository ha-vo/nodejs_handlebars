let multiMongooseToOject = function (courses) {
    return courses.map(course => course.toOject())
}
let mongooseToOject = function (course) {
    return course ? course.toOject() : course
}

export default {
    multiMongooseToOject, mongooseToOject
}