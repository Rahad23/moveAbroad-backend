const express = require("express")
const cors = require("cors")
const eBooksRouter = require("./routes/EBooks")
const app = express()
const port = process.env.PORT || 5000;

// middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connect()
    .then(() => {

        // users routes
        app.use("/", eBooksRouter)

    })
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("MoveAbroad server is running")
})

// app.get("*", (req, res) => {
//     res.send("404 : Not found")
// })

app.listen(port, () => console.log("Server: I am on 😁 - port:", port))