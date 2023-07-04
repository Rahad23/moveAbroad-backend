const { client } = require("./mongoClient")

const eBooksCollection = () => client().db("moveAbroad").collection("eBooks");

module.export =  {
    eBooksCollection
}