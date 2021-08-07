const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Teacher = require("../model/teacher.model");
const { body, validationResult } = require("express-validator");
const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_TEACHER);
};

router.post(
  "/register",
  body("first_name").isLength({ min: 1 }).withMessage("Enter the FirstName"),
  body("last_name").isLength({ min: 1 }).withMessage("Enter the LastName"),
  body("qualification").isLength({min:1}).withMessage("Enter the Qualification"),
  body("email").isEmail().withMessage("Please enter valid email address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password length should be 8 or more"),
  body("role").isLength({ min: 1 }).withMessage("please enter your role"),
  async (req, res) => {
    //  console.log(req.body)
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(401).json({ message: result.array()[0].param });
    }
    try {
      let user = await Teacher.create(req.body);
      const token = newToken(user);
      return res.status(200).send({ data: user, token });
    } catch (error) {
      return res.status(500).send({ message: "Failed" });
    }
  }
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Please enter valid email address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password length should be 8 or more"),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(401).json({ message: result.array()[0].param });
    }
    let user;
    try {
      user = await Teacher.findOne({ email: req.body.email }).exec();
      if (!user) {
        return res
          .status(401)
          .json({ message: "Email or Password is Incorrect" });
      }
      const match = await user.checkpassword(req.body.password);
      if (!match) {
        return res
          .status(401)
          .json({ message: "Email or Password is Incorrect" });
      }
      const token = newToken(user);
      res.status(201).json({ status: "Success", token, data: user });
    } catch (err) {
        console.log(err)
      return res.status(500).json({ error: "Failed" });
    }
  }
);


module.exports=router;
