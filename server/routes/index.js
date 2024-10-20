import express from 'express'
import Auth from './Auth.js'
import Dashboard from './Dashboard.js'
import Verify from '../middlewares/Verify.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use("/auth", Auth)
router.use("/dashboard", Verify, Dashboard)

export default router