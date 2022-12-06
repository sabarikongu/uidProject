const listmodel = require('../models/purchaselist')


exports.list = async(req,res)=>{
    const newList = new listmodel({
        department: req.body.department,
        productname: req.body.productname,
        quantity: req.body.quantity,
        amount: req.body.amount
    })

    try{
       const saved=  await newList.save();
        res.status(200).json(saved)

    }catch(error){
        res.json(error)
    }

}

exports.display=async(req,res)=>{

    const data = await listmodel.find();
    res.json(data)

}

exports.deleteid=async(req,res)=>{
    await listmodel.findByIdAndDelete({_id:req.params.id})
    res.json("successfully deleted")
}