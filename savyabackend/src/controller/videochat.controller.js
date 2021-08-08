const express = require("express");
const videoCall = require("../VideoCall/server");
const router = express.Router();


router.get('/', async (req, res) => {
    videoCall()
})

