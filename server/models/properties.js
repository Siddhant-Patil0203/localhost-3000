import mongoose from "mongoose";

// yet to add required
const propertySchema = new mongoose.Schema({
    title:{
        type:String,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    size:{
        type:String
    },
    status:{
        type:String,
        default:"Listed",
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true,
    },
    blockchainId:{
        type:String,
    },
    ListingDate:{
        type : Date,
        default : Date.now,
    }
})

export default mongoose.model("Properties",propertySchema);