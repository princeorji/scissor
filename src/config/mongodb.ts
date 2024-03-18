import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const db_url = process.env.DB_URL as string


function connect() {
    mongoose.connect(db_url)

    mongoose.connection.on('connected', () => {
        console.log('connected successfully')
    })

    mongoose.connection.on('error', (err) => {
        console.error('connection error:', err)
    })
}

export default connect