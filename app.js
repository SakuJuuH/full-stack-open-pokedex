const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // simple health check endpoint
  // this can be used to check if the server is running
  console.log('Health check received')
  res.status(200).send('ok')
})

app.listen(PORT, () => {
  // test comment
  console.log(`server started on port ${PORT}`)
})
