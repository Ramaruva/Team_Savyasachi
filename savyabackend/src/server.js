const express = require("express");
const app = express();
const connect = require("./db/db");
const cors = require('cors')

const userRouter = require("./controller/user.controller");
const teacherController=require("./controller/teacher.controller")
const videoController=require("./controller/video.controller")

app.use(express.json());
app.use(cors())

app.use("/user", userRouter);
app.use("/teacher",teacherController);
app.use("/video",videoController);

async function start() {
  await connect();
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
}

module.exports = start;