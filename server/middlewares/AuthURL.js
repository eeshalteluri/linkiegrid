import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } from "../config/index.js";
import crypto from "crypto"

export const AuthURL = (req, res) => {
    try{
        const oAuth2Client = new OAuth2Client(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            REDIRECT_URI
        )
        
        // Access scopes
        const scopes = [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
            "openid",
        ]

        // Generate a secure random state value.
        const state = crypto.randomBytes(32).toString('hex');
        console.log("State: ", state);

        // Store state in the session
        req.session.state = state;

        // Generate a url
        const authorizationUrl = oAuth2Client.generateAuthUrl({
            access_type: "offline", // 'online' (default) or 'offline' (gets refresh_token)
            prompt: "consent",
            include_granted_scopes: true,// Enable incremental authorization. Recommended as a best practice.
            scope: scopes,
            state,
        })

        res.redirect(authorizationUrl)
        
    }catch(error){
        console.log("Error while creating authorization URL: ", error);

        res
        .status(500)
        .json({
            status: "failed",
            data: [],
            message: "Something went wrong while generating the authorization URL.",
        })
    }
}