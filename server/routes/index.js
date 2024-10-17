import express from 'express'
import Auth from './Auth.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use("/auth", Auth)

export default router