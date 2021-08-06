const express = require("express");
const app = express();
const connect = require("./db/db");

const userRouter = require("./controller/user.controller");

app.use(express.json());


app.use("/user", userRouter);

async function start() {
  await connect();
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
}

module.exports = start;