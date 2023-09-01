const exp= require("express");
const Cus = require("../model/Customer_mod")
const router= exp.Router();

router.post("/add",async(req,res)=>{
    var inscus={
        customerName: req.body.cname,
        email: req.body.cemail,
        phoneNumber: req.body.cphone,
        qr: req.body.cqr,
    };
    await Cus.create(inscus);
    console.log(req.body);

    res.json({msg: "Add Customer"});
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

router.post("/edit",async(req, res)=>{
    var data=await Cus.findById(req.body.id);
    res.json(data);
});
router.post("/bill",async(req, res)=>{
    var data=await Cus.findById(req.body.id);
    res.json(data);
});

router.post("/upd",async(req,res)=>{
    var inscus={
        customerName: req.body.cname,
        email: req.body.cemail,
        phoneNumber: req.body.cphone,
    };
    await Cus.findByIdAndUpdate(req.body.id,inscus);
    res.json({msg: "Add Customer"});
})

module.exports=router;