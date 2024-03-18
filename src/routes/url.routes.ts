import express from 'express'
import limiter from '../middleware/rateLimit'
import {
    shortenUrl,
    getShortUrl,
    customUrl,
    generateQR,
    getLinkHistory,
    getAnalytics
} from '../controllers/url'

const routes = express.Router()

routes.post('/shorten', limiter, shortenUrl)

routes.get('/:shortUrl', getShortUrl)

routes.post('/custom', limiter, customUrl)

routes.get('/qr/:shortUrl', generateQR)

routes.get('/history', getLinkHistory)

routes.get('/analytics/:shortUrl', getAnalytics)

export default routes