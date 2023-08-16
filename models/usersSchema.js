const mongoose = require("mongoose");
const validator=require("validator");

const usersSchema = new mongoose.Schema({
    firstname:{

        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value)
        {


            if(!validator.isEmail(value)){

                throw Error("no valid email ")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","In-Active"],
        default:"Active"
    },
    dateCreated:{
        type:Date
    },
    dateUpdated:{
        type:Date
    }})
// models define . 
const users = new mongoose.model("users",usersSchema);

module.exports = users;