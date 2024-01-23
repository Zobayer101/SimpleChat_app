
const Uploder=require('./upLoder');

const avaterUplod=(req,res,next)=>{
    const uplods=Uploder(
        "avatars",
        ['image/jpg','image/png','image/jpeg'],
        8000000,
        "jpeg ,jpg or png format only allowed !"
    )
    uplods.any()(req,res,(error)=>{
        if(error){
            res.status(500).json({
                error:{
                    avatars:{
                        msg:error.message,
                    }
                }
            })
        }else{
            next()
        }
    })
}

module.exports=avaterUplod;