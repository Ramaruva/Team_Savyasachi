const {Schema,model} = require("mongoose")


const videoSchema =new Schema({
   title:{type:String,required:true},
   link:{type:String,required:true},
   views:{type:Number},
   rating:{type:Number}
   
})

const Video = model("video",videoSchema)

module.exports=Video