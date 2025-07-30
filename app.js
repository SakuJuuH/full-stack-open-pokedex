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

app.get('/simulate-failure', (req, res) => {
  healthCheckShouldFail = true
  res.json({ message: 'Health checks will now fail' })
})

app.get('/simulate-recovery', (req, res) => {
  healthCheckShouldFail = false
  res.json({ message: 'Health checks will now pass' })
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
