import express from 'express'
import User from '../model/User.js'

const router = express.Router()

router.get('/', (req, res) => {
    const userID = req.user
    console.log(userID)

    User.findById(userID)
        .then(user => {
            console.log(user)
            res.json({user})
        })
        .catch(err => {
            console.log(err)
        })

})

export default router