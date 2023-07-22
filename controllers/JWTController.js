const jwt = require('jsonwebtoken');
const { adminCollections } = require('../mongoDBConfig/collections');

// Get JWT token
const getJWT = async (req, res) => {
    const { email } = req.body;
    console.log(email)
    const user = await adminCollections.findOne({ email });
    if (user) {
        const token = jwt.sign({ email }, process.env.TOKEN, { expiresIn: '10h' })
        return res.send({
            accessToken: token
        })
    }
    res.status(401).send({ message: "unauthorized access" })
}

// Verify JWT token
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            message: 'unauthorized access'
        })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECURITY_TOKEN, function (error, decoded) {
        if (error) {
            return res.status(403).send({
                message: 'forbidden access'
            })
        }
        req.decoded = decoded;
        next();
    })
}


module.exports = {
    verifyJWT,
    getJWT
}