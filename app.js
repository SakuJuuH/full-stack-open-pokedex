const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000
let healthCheckShouldFail = false

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  if (healthCheckShouldFail) {
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
    })
  }
  res.status(200).json({ status: 'ok', message: 'Health check passed' })
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

setTimeout(() => {
  healthCheckShouldFail = true
  throw new Error('Simulated health check failure')
}, 5 * 60 * 1000)
