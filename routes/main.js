const express = require("express");
const router = express.Router();
const Volunteer = require("../models/volunteer");
const mongoose = require("mongoose");

const serveMainPage = (req,res)=>{
    res.render("main");
}

const postFormTodb = async (req,res,next)=>{
    try {
        const person = await Volunteer.create(req.body);
        res.redirect("/");
    } catch (error) {
        res.status(501).json({msg:error});
    }
}

router.route('/').get(serveMainPage).post(postFormTodb);

module.exports = router;