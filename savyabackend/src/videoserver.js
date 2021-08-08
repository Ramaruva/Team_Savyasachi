const express = require("express");
const http = require("http")
const cors = require("cors")
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const Routes = require("./routes/chat.routes");
app.use(cors())
app.use(express.json())
app.use(Routes)
const io = (module.exports.io = require("socket.io")(server));
const socketManager = require("./utils/socketManager");
io.on("connection", socketManager);

server.listen(6583,()=>{
    console.log(`Listening on port 6583`)
})