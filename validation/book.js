import { body } from 'express-validator'

export const bookValidation = [
    body('bookName').isLength({min: 5}),
    body('author').optional(),
    body('year').isLength({min:1}),
]