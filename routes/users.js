const { getUsers, postUsers } = require("../controllers/usersController");


const usersRouter = require("express").Router();

usersRouter.get('/', getUsers)
usersRouter.post('/', postUsers)

module.exports = {
    usersRouter,
}