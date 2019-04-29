import path from 'path'
import express from 'express'
import { Request, Response } from 'express'
import game from './controller/game'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost/diplomacy')

const isDev = process.env.NODE_ENV !== 'production'
const app = express()
const HTML_FILE = isDev ? path.join(__dirname, '../../dist/client/index.html') : path.join(__dirname, 'client/index.html')

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Serve up static files
app.use(express.static(path.join(__dirname, isDev ? '../../dist/client' : '/client')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(HTML_FILE)
    console.log('hey!')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`)
    console.log('Press Ctrl+C to quit.')
})

app.use('/game', game)

export default app
