const express = require("express");
const dotenv = require("dotenv");
dotenv.config({})
const app = express()
require("./config/db")
const helmet = require("helmet");
const morgan = require("morgan");
app.use(helmet())
app.use(morgan("tiny"))
app.use("/api/", require("./routes/users"))

const PORT = 4001 || process.env.PORT
app.listen(PORT, (req, res) => {


    console.log(`LISTENING ON PORT ${PORT}`);


})
app.get("/", (req, res) => {
    res.send("WELCOME")
})
