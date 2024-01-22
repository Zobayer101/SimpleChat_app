
const mongoose=require('mongoose');

const DBconnect=async()=>{
    try{
        const con = await mongoose.connect(process.env.DBURL);
        console.log(`DataBase connect on ${con.connection.host}`);
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports=DBconnect;