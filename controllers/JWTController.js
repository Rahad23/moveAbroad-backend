const jwt = require('jsonwebtoken');
const { adminCollections } = require('../mongoDBConfig/collections');

// Get JWT token
async function getJWT(req, res) {
    const { email } = req.body;

    try {
    //   const db = await connectToMongoDB();
        const token = jwt.sign({ email }, process.env.JWT_SECURITY_TOKEN, { expiresIn:  '5d' });
        return res.send({
          accessToken: token
        });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  }

// Verify JWT token
const verifyJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            message: 'unauthorized access '
        })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN, function (error, decoded) {
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