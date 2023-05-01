const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    fullName: {
        type:String, 
        required:[true, "You must provide your full name"],
        maxlenght: [20, "Enter valid name"],
    },
    emailAdress:{
        type:String,
        trim:true,
        default : "Empty"
        },
    phoneNumber:{
        type:String,
        require:[true,"In Order to contact you we need your phone number"]
    },
    message:{
        type:String,
        maxlenght: [70, "If you have a lot of things to tell, contact us"],
        default : "Empty",
    },
    getNotified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('volunteer', volunteerSchema);