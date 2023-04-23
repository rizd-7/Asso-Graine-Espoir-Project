const express = require("express");
const router = express.Router();

const serveAboutUsPage = (req,res)=>{
    res.render("aboutUs");
}


router.route('/aboutUs').get(serveAboutUsPage);

module.exports = router;