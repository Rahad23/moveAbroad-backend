const { client } = require("./mongoDBClient")

const eBooksCollection = () => client().db("MoveAbroad").collection("eBooks");
const usersCollection = () => client().db("MoveAbroad").collection("users");
const liveOnlineSeminarCollection = () => client().db("MoveAbroad").collection("onlineSeminar");

module.exports =  {
    eBooksCollection,
    usersCollection,
    liveOnlineSeminarCollection
}