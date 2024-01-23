
const path=require('path');
const multer=require('multer');
const createError=require('http-errors');

 const Uploders=(
    SubFolder_path,
    Support_arr,
    file_Size,
    err_message
 )=>{
    //uplod file folder path
    const Uplod_Folder=`./Uplods/${SubFolder_path}/`;
    
    const storage=multer.diskStorage({
        destination:(req,file,CB)=>{
            CB(null,Uplod_Folder)
        },
        filename:(req,file,CB)=>{
            const fileExtantion=path.extname(file.originalname);
            const newName=file.originalname.replace(fileExtantion, ' ')
                                            .toLocaleLowerCase()
                                            .split(' ')
                                            .join('-')+"-"+Date.now();
            CB(null,newName+fileExtantion)                                            
        }
        
    });

    const uplod=multer({
        storage:storage,
        limits:{
            fileSize:file_Size
        },
        fileFilter:(req,file,CB)=>{
            if(Support_arr.includes(file.mimetype)){
                CB(null,true)
            }else{
                CB( createError(err_message))
            }
        }
    });
    return uplod;
 }

 module.exports=Uploders;
