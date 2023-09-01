const mongoose = require("mongoose");
const cartsc = mongoose.Schema({
    "customerId": mongoose.Types.ObjectId,
    "qr": String,
});

module.exports=mongoose.model("Cart",cartsc);