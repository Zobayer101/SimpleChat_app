
const JWT=require('jsonwebtoken');

const AutheGard= async(req,res,next)=>{
    try{
        const cookie=req.cookies;
        
        const values=Object.values(cookie);
        console.log(cookie);
        const decode= JWT.verify(values[0],process.env.JWT_SECRET);
        
        req.userId=decode.userId;

        next() 

    }catch(error){
        console.log('Authentication is faled in Gard');
        next(new Error('Authentication is fale '))
    }
}

module.exports=AutheGard;
