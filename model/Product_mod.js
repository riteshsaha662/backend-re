const mongoose = require("mongoose");
const prosc = mongoose.Schema({
    "productName": String,
    "price": String,
    "qr":String,
});

module.exports=mongoose.model("Product",prosc);