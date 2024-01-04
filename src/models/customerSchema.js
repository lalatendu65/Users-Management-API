const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true

    },
    phoneNumber:{
        type:Number,
        required:true
        
    },
    address: {
        type:String,
    }


  },
  { versionKey: false }
);

const CustomerData = mongoose.model("CustomerManagement", CustomerSchema);

module.exports = CustomerData;
