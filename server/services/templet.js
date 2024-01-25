const axios=require('axios');


// Signup templet render
exports.SignupTemp=(req,res)=>{
    res.render('signup')
}


// Login templet render
exports.LoginTemp=(req,res)=>{
    res.render('Login')
}


// Inbox templet render
exports.InboxTemp= (req,res)=>{
    axios.get('http://localhost:3300/route/api/retrive')
    
    .then((response)=>{
            //const User=response.json()
            console.log(response.data)
           
        res.render('Inbox',{
            User:response,
        })
    })
    .catch((error)=>{
        res.send(error.message)
        console.log(error)
    })
   
}


