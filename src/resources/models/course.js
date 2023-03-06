import mongoose from "mongoose";
// import * as slug from 'mongoose-slug-generator'

// mongoose.plugin(slug)
const Schema = mongoose.Schema

const Courses = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    video: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    slug: { type: String }
})

export default mongoose.model('Course', Courses)