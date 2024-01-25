
const mongoose=require('mongoose');

const schema= new mongoose.Schema({
 CreatedID:{
    type:mongoose.Types.ObjectId,

 },
 ParicipatedID:{
    type:mongoose.Types.ObjectId,
 },
 lastUpdate:{
    type:String,
    default: Date.now().toLocaleString()
 }
});

const ConversationDB= mongoose.model('Conversation',schema);

module.exports=ConversationDB;