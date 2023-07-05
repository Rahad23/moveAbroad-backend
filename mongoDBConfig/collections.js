const { client } = require("./mongoDBClient")

const eBooksCollection = () => client().db("MoveAbroad").collection("eBooks");
const usersCollection = () => client().db("MoveAbroad").collection("users");

module.exports =  {
    eBooksCollection,
    usersCollection
}