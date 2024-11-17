import { OAuth2Client } from "google-auth-library"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } from "../config/index.js"
import axios from "axios"



const getUserData = async (access_token) => {
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`)
    const data = await response.data
    console.log("Data: ", data)

    return data
}

export const AccessToken = async (req, res, next) => {
    console.log("Auth2Signup API initiated")
    console.log(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI)

    try {
        const { code, state } = req.query

        const oAuth2Client = new OAuth2Client(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            REDIRECT_URI
        )

        if (state !== req.session.state) {    
            return res.status(400).send('Invalid state')
        }

        const { tokens } = await oAuth2Client.getToken(code)
        console.log("Tokens: ", tokens)

        await oAuth2Client.setCredentials(tokens)
        const userData = await getUserData(tokens.access_token)

        console.log("User: ", userData)

        req.body.firstName = userData.given_name
        req.body.lastName = userData.family_name
        req.body.email = userData.email

        next()
        
}catch (error) {
        console.log("Error: ", error)
    }
}