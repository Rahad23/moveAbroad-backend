const { client } = require("./mongoDBClient")

const eBooksCollection = () => client().db("MoveAbroad").collection("eBooks");
const usersCollection = () => client().db("MoveAbroad").collection("users");
const liveOnlineSeminarCollection = () => client().db("MoveAbroad").collection("onlineSeminar");
const adminCollections = () => client().db("MoveAbroad").collection("admin");

module.exports =  {
    eBooksCollection,
    usersCollection,
    liveOnlineSeminarCollection,
    adminCollections,
}