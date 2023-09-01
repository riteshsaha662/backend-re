const exp = require("express");
const app = exp();
const cors = require("cors");
const bodyParser= require("body-parser");
const fu= require("express-fileupload");

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://mean-project:mean_project@cluster0.wzkmbz6.mongodb.net/inventory?retryWrites=true&w=majority')

const cus=require("./routes/Customer")
const pro=require("./routes/Product")
const cart=require("./routes/Cart")

app.use(exp.static('public'));
app.use(cors());
app.use(fu());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("Hello")
});

app.use("/cus",cus);
app.use("/pro",pro);
app.use("/cart",cart);

app.listen(2000);