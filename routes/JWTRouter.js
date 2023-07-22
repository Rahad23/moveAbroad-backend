const { getJWT } = require("../controllers/JWTController");

const jwtRouter = require("express").Router();


//get jwt token
jwtRouter.post('/', getJWT);
// jwtRouter.post('/', )
module.exports = jwtRouter