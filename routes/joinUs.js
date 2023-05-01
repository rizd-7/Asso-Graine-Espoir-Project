const express = require("express");
const router = express.Router();
const Volunteer = require("../models/volunteer");
const mongoose = require("mongoose");

const serveJoinUsPage = (req,res)=>{
    res.render("joinUs");
}

router.route('/joinUs').get(serveJoinUsPage);

module.exports = router;