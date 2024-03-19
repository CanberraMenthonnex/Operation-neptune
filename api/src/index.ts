import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})