const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true
    },
    Email_address:{
        type:String,
        required:true
    },
    invitation_type:{
        type:String
    },
    comments:{
        type:String
    }
  });

  module.exports=mongoose.model('user',UserSchema);