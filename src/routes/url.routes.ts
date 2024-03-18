import express from 'express'
import {
    shortenUrl,
    getShortUrl,
    customUrl,
    generateQR,
    getLinkHistory,
    getAnalytics
} from '../controllers/url'

const routes = express.Router()

routes.post('/shorten', shortenUrl)

routes.get('/:shortUrl', getShortUrl)

routes.post('/custom', customUrl)

routes.get('/qr/:shortUrl', generateQR)

routes.get('/history', getLinkHistory)

routes.get('/analytics/:shortUrl', getAnalytics)

export default routes