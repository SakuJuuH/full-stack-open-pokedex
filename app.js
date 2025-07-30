const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Health check passed' })
})

/* This endpoint simulates a health check failure.
    It can be used to test the health check failure handling in the CI/CD pipeline.
app.get('/failed-health', (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Simulated health check failure',
  })
})
*/

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
