import express, { Request, Response } from 'express'
import connectdb from './config/mongodb'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

import urlRoutes from './routes/url.routes'

const app = express()
const port = process.env.PORT

connectdb()

app.use(bodyParser.json())
app.use('/urls', urlRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})