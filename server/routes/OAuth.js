import express from 'express'
import { AuthURL } from '../middlewares/AuthURL.js'
import { AccessToken } from '../controllers/OAuth.js'
import { SignUp } from '../controllers/Auth.js'

const router = express.Router()

router.get('/', AuthURL)
router.get('/callback', AccessToken, SignUp)

export default router