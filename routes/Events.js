const express = require("express");
const router = express.Router();

const serveEventsPage = (req,res)=>{
    res.render("Events");
}


router.route('/Events').get(serveEventsPage);

module.exports = router;