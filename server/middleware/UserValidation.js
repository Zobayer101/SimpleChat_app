
const {check,validationResult}=require('express-validator');
const createError=require('http-errors');
const path=require('path');
const fs=require('fs');
const UserDB=require('../model/UsersModel');

exports.addUserValidator=[ 
    check('fname')
    .isLength({min:1})
    .withMessage("First name is required !")
    .isAlpha("en-US",{ignore:"-"})
    .withMessage("Name must content anything other than alphabet")
    .trim(),
  check('lname')
    .isLength({min:1})
    .withMessage("Last name is required !")
    .isAlpha("en-US",{ignore:"-"})
    .withMessage("Name must content anything other than alphabet")
    .trim(),
  check('email')
    .isEmail()
    .withMessage("Invalid email !")
    .trim()
    .custom(async (value)=>{
        try{
            const user=await UserDB.findOne({email:value}) 
            if(user){
                throw createError('email alrady use !')
            }

        }catch(error){
            throw createError(error.message)
        }
    }),
  check('password')
    .isStrongPassword()
    .withMessage("Password mustbe 8 charactor long & shold content last 1 lowercase, 1 uppercase, 1 number & 1 symble"),
 check('phone')
    .isMobilePhone("bn-BD",{
        strictMode:true
    })
    .withMessage("mobile number is must be Bangladeshi valid number !")
    .custom( async (value)=>{
        try{
            const usernumber= await UserDB.findOne({phone:value});
            if(usernumber){
                throw createError('This number alrady in use !')
            }
        }catch(error){
            throw createError(error.message)
        }
    })


]
 
exports.ValidatiorHandaler= async (req,res,next)=>{
    
    const errors=validationResult(req);
    const maperror=errors.mapped();
    if(Object.keys(maperror).length==0){
        next()
    }else{
        if(req.files.length > 0){
            const {filename}=req.files[0];
           
            await fs.unlink(`../First_Chat_app/Uplods/avatars/${filename}`,(error)=>{
                console.log(error)
            });
                
            
            // fs.unlink(
            //     path.join(__dirname, `/../Uplods/avatars/${filename}`),
            //     (error)=>{
            //         if(error){
            //             console.log(error.message)
            //         }
            //     }
            // )
        }

        //response
        res.status(500).json({
            error:maperror,
        })
    }
}

//module.exports=addUserValidator;