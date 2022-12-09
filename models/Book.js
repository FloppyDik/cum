import mongoose from "mongoose";

const BookScheme = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    author: String,
    year: String,
},
{
    timestamps: true,
})

export default mongoose.model('book', BookScheme)