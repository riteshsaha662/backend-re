const exp= require("express");
const Cus = require("../model/Product_mod")
const router= exp.Router();

router.post("/add",async(req,res)=>{
    var inspro={
        productName: req.body.pname,
        price: req.body.pprice,
        qr: req.body.qr,
    };
    await Cus.create(inspro);
    console.log(req.body);

    res.json({msg: "Add Product"});
});


router.get("/sel",async(req,res)=>{
    var data= await Cus.find();
    res.json(data);
});

router.post("/del",async(req,res)=>{
    var id=req.body.id;
    await Cus.findByIdAndDelete(id);
    res.json({msg: "deleted"});
});


module.exports=router;