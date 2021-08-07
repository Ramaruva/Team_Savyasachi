const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../model/user.model");
const jtw = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jtw.sign({ id: user.id }, process.env.JWT_SECRET);
};
router.post(
  "/signup",
  body("first_name").trim().not().isEmpty().withMessage("First Name Cannot be Empty"),
  body("last_name").trim().not().isEmpty().withMessage("Last Name Cannot be Empty"),
  body("email").isEmail().withMessage("Please enter a valid Email Address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password length should be 8 or more"),
    body("type").trim().not().isEmpty().withMessage("Type cannot be Empty"),
    body("qualification").trim().not().isEmpty().withMessage("Qualification Cannot be Empty"),
    body("phone")
    .trim()
    .isLength({ min: 10,max:10 })
    .withMessage("Phone Number must be 10 digits"),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(401).json({ message: result.array()[0].param });
    }
    let user;
    try {
      user = await User.create(req.body);
      const token = newToken(user);
      return res
        .status(201)
        .send({ message: "Success", userData: user, token });
    } catch (err) {
      return res.status(500).send({ message: "Failed" });
    }
  }
);

router.post("/signin", async (req, res) => {
  let user;
  try {
    user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email or Password is Incorrect" });
    }
    const match = await user.checkPassword(req.body.password);
    if (!match) {
      return res
        .status(401)
        .json({ message: "Email or Password is Incorrect" });
    }
    const token = newToken(user);
    res.status(201).json({ status: "Success", token, userData: user });
  } catch (err) {
    return res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;
