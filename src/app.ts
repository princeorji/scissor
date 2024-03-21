import express, { Request, Response } from 'express'
import connectdb from './config/mongodb'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

import urlRoutes from './routes/url.routes'

const app = express()
const port = process.env.PORT

connectdb()

app.use(bodyParser.json())
app.use('/urls', urlRoutes)

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})