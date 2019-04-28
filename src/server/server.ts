import * as path from 'path'
import * as express from 'express'
import { Request, Response } from 'express'
import apiRoutes from './controller/api-routes'
import game from './controller/game'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost/diplomacy')

const isDev = process.env.NODE_ENV !== 'production'
const app = express()
const HTML_FILE = path.join(__dirname, 'client/index.html')

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Serve up static files
app.use(express.static(path.join(__dirname, '/client')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`)
    console.log('Press Ctrl+C to quit.')
})

app.use('/api', apiRoutes)
app.use('/game', game)

export default app
