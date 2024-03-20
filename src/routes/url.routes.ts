import express from 'express'
import limiter from '../middleware/rateLimit'
import {
    shortenUrl,
    getShortUrl,
    generateQR,
    getLinkHistory,
    getAnalytics
} from '../controllers/url'

const routes = express.Router()

routes.post('/shorten', limiter, shortenUrl)

routes.get('/:shortUrl', getShortUrl)

routes.get('/qr/:shortUrl', generateQR)

routes.get('/', getLinkHistory)

routes.get('/analytics/:shortUrl', getAnalytics)

export default routes