
const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trime:true
    } ,
    lname:{
        type:String,
        required:true,
        trim:true
    }  ,
    email:{
        type:String,
        required:true,
        unique:true,
        minLingth:6,
        lowarcase:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLingth:8,
    },
    birthDay:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        require:true,
    },
    avatar:{
        type:String,
        default:'no-photo.jpg'
    },
    Date:{
        type:String,
        default: Date.now()
    }

},{
    timestamps:true
})

const UserDB=mongoose.model('User',schema);

module.exports=UserDB;
