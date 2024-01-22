
const multer=require('multer');
const path=require('path');


const ULpath='./Uplods/';

const storege=multer.diskStorage({
    destination:(req,file,CB)=>{
        CB(null,ULpath)
    },
   filename:(req,file,CB)=>{
    const extantion=path.extname(file.originalname);
    const newName=file.originalname.replace(extantion, ' ')
                                    .toLocaleLowerCase()
                                    .split(' ')
                                    .join('-')+"-"+ Date.now();
                                
    CB(null,newName+extantion)
   }
})


const uplod=multer({
    //dest:ULpath,
    storage:storege,
    limits:{
        fileSize:10000000,
    },
    fileFilter:(req,file,CB)=>{
        console.log(file);
        CB(null,true)
    }
})
module.exports=uplod