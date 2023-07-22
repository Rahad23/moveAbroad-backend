const { getAdmin, postAdmin } = require("../controllers/AdminController");
const { verifyJWT } = require("../controllers/JWTController");

const admin = require("express").Router();

admin.get('/',  getAdmin);
admin.post('/', postAdmin);

module.exports={
    admin
}