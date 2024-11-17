import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: function() { return this.authMethod === 'local'; }, // Only required for local users
    },
    googleId: {
        type: String,
        required: function() { return this.authMethod === 'google'; }, // Only required for Google users
        unique: true,
    },
    authMethod: {
        type: String,
        enum: ['local', 'google'], // Possible authentication methods
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre("save", function (next) {
    const user = this

    if (!user.isModified("password")) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})



export default mongoose.model("User", userSchema)