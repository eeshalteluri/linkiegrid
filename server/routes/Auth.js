import express from 'express'
import { Login, SignUp } from '../controllers/Auth.js'

const router = express.Router()

router.post('/signup', SignUp)
router.post('/login', Login)

export default router