const express = require("express")
const cors = require("cors")
const { eBooksRouter } = require("./routes/EBooks");
const { connect } = require("./mongoDBConfig/mongoDBClient");
const { usersRouter } = require("./routes/users");
const { eBookMulter } = require("./routes/Multer");
const { liveSeminarMulter } = require("./routes/LiveSeminarMulter");
const { liveOnlineSeminar } = require("./routes/LiveOnlineSeminar");
const { admin } = require("./routes/Admin");
const jwtRouter = require("./routes/JWTRouter");
const app = express()
const port = process.env.PORT || 5000;

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
connect()
    .then(() => {
        // Ebook route
        app.use("/ebook", eBooksRouter);
        app.use("/users", usersRouter);
        app.use("/upload",eBookMulter);
        app.use("/liveSeminar", liveSeminarMulter);
        app.use("/liveOnlineSeminar", liveOnlineSeminar);
        app.use("/admin", admin);
        app.use("/jwt", jwtRouter);
    })
    .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("MoveAbroad server is running")
})

app.listen(port, () => console.log("Server: I am on 😁 - port:", port))