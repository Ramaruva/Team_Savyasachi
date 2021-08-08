const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    callback(
      null,
      uuidv4() + ".mp4"
    );
  },
});

const fileFilter = function (req, file, callback) {
  if (file.mimetype === "video/mp4") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage, 
  fileFilter,
});

module.exports = upload;