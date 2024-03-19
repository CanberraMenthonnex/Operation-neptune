import mongoose from 'mongoose'

const DB_URL = process.env.DB_URL || ''

/**
 * It connects to the MongoDB database.
 */
export async function connectDb() {
  await mongoose.connect(DB_URL)
  console.log('Connected to MongoDB')
}
