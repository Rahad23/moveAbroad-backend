require("dotenv").config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
// const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster1.nijzvjl.mongodb.net/?retryWrites=true&w=majority`
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xa1zyf9.mongodb.net/?retryWrites=true&w=majority`;
module.exports = URI