require("dotenv").config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

// const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster1.nijzvjl.mongodb.net/?retryWrites=true&w=majority`
const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.z9zwita.mongodb.net/?retryWrites=true&w=majority`;
module.exports = URI