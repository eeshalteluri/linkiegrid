import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session';
import cors from 'cors'
import { URI, PORT } from './config/index.js'

import App from './routes/index.js'
import cookieParser from 'cookie-parser'

const server = express()

server.use(cors({origin: 'http://localhost:5173', credentials: true}))
server.use(express.json())
server.use(cookieParser())
// Set up session middleware
server.use(session({
  secret: 'your-secret-key', // replace with a strong secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set secure to true in production with HTTPS
}))

mongoose.connect(URI)
        .then(console.log("Connected to Database"))
        .catch(error => console.log(error))

server.use(App)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})