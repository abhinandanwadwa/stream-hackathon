var jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWTPRIVATEKEY;

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please Authenticate using a valid token" });
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}


module.exports = fetchuser;