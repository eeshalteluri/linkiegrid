import jwt from 'jsonwebtoken';
import { SECRET_ACCESS_TOKEN } from '../config/index.js';

const Verify = (req, res, next) => {
    // Check if cookies are being parsed
    console.log("Headers: ", req.headers);
    const token = req.cookies.SessionID;
    console.log("Cookies: ", req.cookies); // Debugging statement
    console.log("verifyToken: ",token) // Get token from cookies
    
    console.log("Token: ",token);
    if (!token) {
        return res.status(401).json({ msg: 'No token, verification denied' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_ACCESS_TOKEN);
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default Verify
