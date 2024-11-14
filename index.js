import express from 'express'
import axios from 'axios'

const app = express()

app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Hello SonarQube!' })
})
console.log("This is a very long line created to test the ESLint max-line rule and see if it triggers an error because the length of this line is excessively long, with a lot of unnecessary text to make it go over any reasonable limit that would typically be imposed by such a rule. Let's see if it works!");

app.get('/api/quote', async (req, res) => {
    try {
        const response = await axios.get('https://zenquotes.io/api/random')
        res.status(200).json(response.data[0])
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quote' })
    }
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

export default app
