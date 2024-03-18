import rateLimit from 'express-rate-limit'

// Defaults to in-memory store. 
// You can use redis or any other store.
const limiter = rateLimit({
    windowMs: 0.5 * 60 * 1000, // 15 minutes
    max: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

export default limiter