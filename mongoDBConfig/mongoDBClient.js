const { MongoClient, ServerApiVersion } = require("mongodb");
const URI = require("./uri");

let client;

async function connect() {
    if (!client) {
        client = await MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
        .catch(err => { console.log(err); });
    }
    return client;
}

const getConectedClient = () => client;

module.exports = { connect, client: getConectedClient }