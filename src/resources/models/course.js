import mongoose from "mongoose";

const Schema = mongoose.Schema

const Courses = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})

export default mongoose.model('Course', Courses)