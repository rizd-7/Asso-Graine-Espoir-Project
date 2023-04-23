const express = require("express");
const router = express.Router();

const serveMainPage = (req,res)=>{
    res.render("main");
}


router.route('/').get(serveMainPage);

module.exports = router;