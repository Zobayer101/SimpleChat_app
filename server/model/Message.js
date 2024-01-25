
const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    sender:{
        type:mongoose.Types.ObjectId,
    },
    resiver:{
        type:mongoose.Types.ObjectId,
    },
    text:{
        type:String,

    },
    photos:[
        {
            type:String,
        }
    ],
    time:{
        type:String,
        default:  Date.now().toLocaleString()
    }
})

const MessageDB= mongoose.model('Message',schema);

module.exports=MessageDB;