const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,

    },
    role:{
        type:String,
      
        default:"CUSTOMER"

    },
    mobile:{
        type:String,
      
    },
    address:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"addresses"

    }],
   paymentInformation:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"payment_Information"

    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"rating"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"review",
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const User=mongoose.model("users", userSchema);
module.exports=User;