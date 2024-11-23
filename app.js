const express = require("express")
const cors = require("cors")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

app.use(cors())


// Middleware to parse JSON body
app.use(express.json());


app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})