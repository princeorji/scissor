import QRCode from 'qrcode'

export async function generateQRCode(inputText: string): Promise<string> {
    return new Promise((resolve, reject) => {
        QRCode.toString(inputText, {
            errorCorrectionLevel: 'H',
            type: 'svg'
        }, (err: any, data: string | undefined) => {
            if (err) {
                reject(err)
            } else {
                resolve(data || '')
            }
        })
    })
}

export const validateUrl = (url: string): boolean => {
    const urlRegex = /^https?:\/\/(?:www\.)?[\w.-]+\.[a-zA-Z]{2,}$/
    return urlRegex.test(url)
}