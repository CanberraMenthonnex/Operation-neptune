import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';
import cors from "cors"
import { characterRouter } from './character/character.routes';
import { connectDb } from './core/database';
import { errorMiddleware } from './core/middlewares/error.middleware';
import { scenarioRouter } from './scenario/scenario.routes';


const app = express()
const port = process.env.PORT

// Connect to the database
connectDb().catch((error) => console.error(error))

// Set up the global middlewares
app.use(bodyParser.json())

app.use(cors({
  origin: "*"
}))

app.get('/', (_, res) => {
  res.send('Server is running!')
})

// Use the custom routers
app.use('/scenario', scenarioRouter)
app.use('/character', characterRouter)

// Set up the error middleware
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

