const express = require("express");
const router = express.Router();

const servegalleryPage = (req,res)=>{
    res.render("gallery");
}

router.route('/gallery').get(servegalleryPage);

module.exports = router;