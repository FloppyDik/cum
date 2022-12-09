import express from "express";
import mongoose from "mongoose";
import BookModel from './models/Book.js'
import { bookValidation } from "./validation/book.js";
import { validationResult } from "express-validator/src/validation-result.js";
import cors from 'cors'

const app = express()
mongoose.connect('mongodb+srv://admin:adminadmin@cluster0.s6esnxz.mongodb.net/library?retryWrites=true&w=majority')
.then (
    () => {
        console.log('db is up');
    }
)


app.listen(5000)

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/addBook', bookValidation, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }

    const doc = new BookModel({
        bookName: req.body.bookName,
        author: req.body.author,
        year: req.body.year,
    })
    
    const book = await doc.save()

    res.json(book)
})


app.get('/allBooks', (req, res) => {+
    BookModel.find()
    .then (
        (result) => {
            res.send(result)
        }
    )
})