const {Schema,model} = require("mongoose")


const videoSchema =new Schema({
   title:{type:String,required:true},
   link:{type:String,required:true},
   views:{type:Number},
   rating:[{type:Number}],
   comments: [{ type: String }],
   subName: { type: String },
   description: { type: String },
   authorID:{ type:Schema.Types.ObjectId, ref: "teacher", required: true }
   
   
}, {
   timestamps: true,
   versionKey:false
})

const Video = model("video",videoSchema)

module.exports=Video