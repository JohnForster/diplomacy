
const path = require('path')
const express = require('express')
import { Request, Response } from 'express'

const isDev = process.env.NODE_ENV !== 'production'
const app = express()
const HTML_FILE = path.join(__dirname, 'client/index.html')

app.use(express.static(path.join(__dirname, '/client')))
app.get('/', (req: Request, res: Response) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})