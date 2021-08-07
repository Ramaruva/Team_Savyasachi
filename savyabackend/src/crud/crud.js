const post = (model)=>async(req,res)=>
{
    const item =await model.create(req.body)
    return res.status(201).json({data:item})
}

const getAll =(model)=>async(req,res)=>
{
    const item = await model.find().lean().exec()
    return res.status(201).json({data:item})
}
const getOne =(model)=>async(req,res)=>
{
    const item = await model.findById(req.params.id).lean().exec()
    return res.status(201).json({data:item})
}

const updateOne =(model)=>async(req,res)=>
{
    const item = await model.findByIdAndUpdate(req.params.id)
    return res.status(200).json({data:item})
}

const deleteOne =(model)=>async(req,res)=>
{
    const item = await model.finByIdandDelete(req.params.id)
    return res.status(201).json({data:item})
}
module.exports =(model)=>({
  post:post(model),
  getAll:getAll(model),
  getOne:getOne(model),
  updateOne:updateOne(model),
 deleteOne:deleteOne(model)
})