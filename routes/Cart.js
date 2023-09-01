const exp= require("express");
const Cus = require("../model/Crat_mod")
const router= exp.Router();

router.post("/add",async(req,res)=>{
    var inscart={
        customerId: req.body.cid,
        qr: req.body.cqr,
    };
    await Cus.create(inscart);
    console.log(req.body);

    res.json({msg: "Add Customer"});
});


module.exports=router;