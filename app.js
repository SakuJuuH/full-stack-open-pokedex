const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Health check passed' })
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

setTimeout(() => {
  throw new Error('Delayed crash for testing')
}, 30000)
