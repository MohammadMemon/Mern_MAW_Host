const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"]
    },
    oldPrice:{
        type: Number,
        required:[true, "Please Enter Real Product Price"],
        maxLenght:[6, " Price cannot exceed 6 characters "]
    },
    price:{
        type: Number,
        required:[true, "Please Enter Discounted Product Price"],
        maxLenght:[6, " Price cannot exceed 6 characters "]
    },
    ratings:{
        type: Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
        
    ],
    category:{
        type:String,
        required:[true, "Please Enter Product Category"]
    },
    tags:{
        type:String,
        required:[true, "Please Enter Product Meta Tags, Max 8. "]
    },
    Stock:{
        type:Number,
        required:[true, "Please Enter Product Stock"],
        maxLenght:[3,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,
             },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
     },
    createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)