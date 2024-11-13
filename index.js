import express from 'express'
import axios from 'axios'

const app = express()

app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Hello SonarQube!' })
})

app.get('/api/quote', async (req, res) => {
    try {
        const response = await axios.get('https://zenquotes.io/api/random')
        res.status(200).json(response.data[0])
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quote' })
    }
})

// eslint-disable-next-line no-undef
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    })
}

export default app
