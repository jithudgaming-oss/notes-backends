const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require("./config/db")
connectDB()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/auth", require("./routes/authRoutes"))


const auth = require("./middleware/auth")
app.use("/api/notes", require("./routes/noteRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`WELCOME HANDLER ONE: SERVER IS RUNNING ${PORT}`)
})