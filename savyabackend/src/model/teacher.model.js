const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const teacherSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    quiz: { type: Boolean },
    qualification: { type: String, required: true },
    phone_number:{type:Number}
    
  },
  { timestamps: true }
);

teacherSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

teacherSchema.methods.checkpassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, same) => {
      if (err) return reject(err);
      resolve(same);
    });
  });
};

const Teacher = model("teacher", teacherSchema);
module.exports = Teacher;
