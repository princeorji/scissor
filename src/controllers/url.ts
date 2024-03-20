import { Request, Response } from 'express'
import shortid from 'shortid'
import Url from '../models/url'
import { generateQRCode, validateUrl } from '../utils/utils'

export const shortenUrl = async (req: Request, res: Response) => {
    try {
        const { originalUrl } = req.body
        const shortUrl = shortid.generate()

        if (!validateUrl(originalUrl)) {
            return res.status(400).json({ error: 'Invalid URL format' })
        }

        await Url.create({
            originalUrl,
            shortUrl: shortUrl,
        })

        return res.json({ shortUrl })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getShortUrl = async (req: Request, res: Response) => {
    try {
        const { shortUrl } = req.params
        const url = await Url.findOneAndUpdate(
            { shortUrl },
            { $inc: { clicks: 1 } }, // Increment clicks count by 1
            { new: true } // Return the updated document
        )

        if (!url) {
            return res.status(404).json({ error: 'Short URL not found' })
        }

        res.status(200).json({ originalUrl: url.originalUrl })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const generateQR = async (req: Request, res: Response) => {
    try {
        const { shortUrl } = req.params

        const qrCode = await generateQRCode(shortUrl)

        res.setHeader('Content-Type', 'image/svg+xml')
        res.send(qrCode)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getLinkHistory = async (req: Request, res: Response) => {
    try {
        const linkHistory = await Url.find({})

        res.json({ linkHistory })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getAnalytics = async (req: Request, res: Response) => {
    try {
        const { shortUrl } = req.params
        const url = await Url.findOne({ shortUrl })

        if (!url) {
            return res.status(404).json({ error: 'URL not found' })
        }

        res.json({ clicks: url.clicks })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
