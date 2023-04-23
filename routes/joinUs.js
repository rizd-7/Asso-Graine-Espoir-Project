const express = require("express");
const router = express.Router();

const serveJoinUsPage = (req,res)=>{
    res.render("joinUs");
}


router.route('/joinUs').get(serveJoinUsPage);

module.exports = router;