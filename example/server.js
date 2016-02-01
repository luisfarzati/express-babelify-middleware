import babelify from 'express-babelify-middleware'
import express from 'express'

var app = express()

app.use('/app.js', babelify('public/app.js'))

app.use(express.static('public'))

app.listen(3000, () => console.log('Server is listening'))
