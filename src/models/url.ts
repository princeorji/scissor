import mongoose, { Schema } from 'mongoose'

interface Url {
    originalUrl: string
    shortUrl?: string
    timestamp: Date
    clicks: number
}

const schema = new Schema<Url>({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String },
    timestamp: { type: Date, default: Date.now },
    clicks: { type: Number, default: 0 }
})

export default mongoose.model<Url>('Url', schema)