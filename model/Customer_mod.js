const mongoose = require("mongoose");
const cussc = mongoose.Schema({
    "customerName": String,
    "email": String,
    "phoneNumber":String,
    "qr": String,
});

module.exports=mongoose.model("Customer",cussc);