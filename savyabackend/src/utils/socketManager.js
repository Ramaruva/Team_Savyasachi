const io = require("../videoserver").io;

module.exports = (socket) => {
  console.log("sdfsf")
  try {
    console.log("Connected");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (err) {
    console.log(err.message);
  }
};