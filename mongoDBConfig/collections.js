const { client } = require("./mongoDBClient")

const eBooksCollection = () => client().db("MoveAbroad").collection("eBooks");

module.exports =  {
    eBooksCollection
}