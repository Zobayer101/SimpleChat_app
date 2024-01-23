//module import
const bcript=require('bcrypt');
const JWT=require('jsonwebtoken');

//internal import
const UserDB=require('../model/UsersModel');




//Singup middleware function
exports.Signup= async (req,res)=>{
    //console.log(req.files[0].filename);
    const Pass= await bcript.hash(req.body.password,10);
    try{
        const user = new UserDB({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:Pass,
            birthDay:req.body.birthDay,
            phone:req.body.phone,
            address:req.body.address,
            avatar:req.files[0].filename,
            Date: new Date().toLocaleDateString()

        })
        const data= await user.save(user)

        //Genaret a token
        const Token= JWT.sign({
            userId:data._id,
            userFname:data.fname
        },process.env.JWT_SECRET); 
        res.cookie('user-cookie',Token,{httpOnly:true})
        //res.redirect('/signup')
        res.status(200).json({
            message:'user was send successfully'
        })
    }catch(error){
        console.log(`Data save faild ${error}`);
        res.status(403).send(error.message);
    }
}

//Login middleware function
exports.Login= async (req,res)=>{
    console.log(req.body)
   try{
    const data= await UserDB.find({email:req.body.email})
    console.log(data.length)
    if(data.length > 0){
        const isValid= bcript.compare(req.body.password,data[0].password);
        if(isValid){

            //Genarate a token
            const Token = JWT.sign({
                userId:data[0]._id,
                userFname:data[0].fname,
            },process.env.JWT_SECRET);
            res.cookie('user-cookie',Token,{httpOnly:true}).status(200).send(data)
        }else{
            console.log('password is wrong !')
        }
    }else{
        console.log(`User not found`);
    }
   }catch(error){
    console.log(error.message);
   }
}


//Retrive data 
exports.RetriveData= async (req,res)=>{
    const ID=req.userId;
    
    try{
        const data = await UserDB.find({_id:ID})
        res.status(200).send(data)

    }catch(error){
        console.log(error.message);
        res.status(405).send(error.message);
    }

}
