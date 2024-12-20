import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { google } from "googleapis"
import { SECRET_ACCESS_TOKEN, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } from "../config/index.js"

import User from "../model/User.js"

export const SignUp = async (req, res) => {
    // get required variables from request body
    // using es6 object destructing
    const { firstName, lastName, email, password, googleId } = req.body

    try {
        // Check if user already exists
        const existingEmail = await User.findOne({ email });
        console.log(existingEmail)
        if (existingEmail)
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "Email already in use, log in instead.",
            })

        const authMethod = googleId ? 'google' : 'local'
        console.log(authMethod)

        // create an instance of a user
        const newUser = new User({
            firstName,
            lastName,
            email,
            authMethod,
        })

        if (newUser.authMethod === 'local') {
            if (!password) {
                return res.status(400).json({ message: 'Password is required for signup' })
            }
    
            const salt = await bcrypt.genSalt(10)
            newUser.password = await bcrypt.hash(password, salt)
        } else if (googleId) {
            // If the user is signing up with Google, assign the googleId
            newUser.googleId = googleId
        }
            
        const savedUser = await newUser.save() // save new user into the database
        const {password: userPassword, googleId: userGoogleId, ...user_data } = savedUser._doc
        res.status(200).json({
            status: "success",
            data: [user_data],
            message:
                "Thank you for registering with us. Your account has been successfully created.",
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Something went wrong. Please try again later.",
        });
    }
    res.end()
}

export const Login = async (req, res) => {
    const {email} = req.body;
    console.log("email: ", email)
    console.log("Login API initiated")

    try{
        const isExistingUser = await User.findOne({ email });
        console.log("Existing User: ",isExistingUser);

        if (!isExistingUser){
            return res.status(401).json({
                status: "failed",
                data: [],
                message: "Invalid Email",
            });
        }

        if (user.authMethod === 'local') {
        const isPasswordValid = await bcrypt.compare(req.body.password, isExistingUser.password);
        console.log("isPasswordValid: ", isPasswordValid);

        if (!isPasswordValid){
            return res
                .status(400)
                .json({
                status: "failed",
                data: [],
                message: "Invalid Password",
            });
        }

        const {password, ...savedData} = isExistingUser._doc
        console.log("savedData: ", savedData);

        let options = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // would expire in 2minutes
            httpOnly : true, // Ensures cookie is inaccessible via JavaScript( if set to true)
            secure : false, // Cookie only sent over HTTPS (use in production)
            sameSite : "Lax",
            };

            // Set httpOnly to false
            

        const token = jwt.sign({ id: savedData._id }, SECRET_ACCESS_TOKEN) 
        console.log("loginToken: ", token)

        res.cookie("SessionID", token, options)
        res
        .status(200)
        .json({
            status: "success",
            message: "You have successfully logged in.",
        })
        }

    }catch(error){
        console.log("Error: ", error);
        res
        .status(500)
        .json({
            status: "failed",
            data: [],
            message: "Something went wrong. Please try again later.",
        })
    }
}

