const { usersCollection } = require("../mongoDBConfig/collections");
const { readDoc, createDoc } = require("../utils/mongoQuery");

const getUsers = async (req, res) => {
    const result = await readDoc(usersCollection);
    res.send(result);
};
const postUsers = async (req, res) => {
    const result = await createDoc(req, usersCollection);
    res.send(result);
};

module.exports={
    getUsers,
    postUsers
}