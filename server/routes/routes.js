
const express=require('express');
const route=express.Router();
const temp=require('../services/templet');
const controll=require('../controller/APIcontroll');
const uplod=require('../middleware/Uplod');
const AutheGard=require('../middleware/Authentication');

//all render ejs templet

//signup templet
route.get('/Signup',temp.SignupTemp);

//login templet
route.get('/Login',temp.LoginTemp);

//inbox templet
route.get('/Inbox',temp.InboxTemp);

//all api 

//Signup api
route.post('/route/api/signup',uplod.single('avatar'),controll.Signup);

//Login api
route.post('/route/api/login',controll.Login);

//Inbox Read data api

//Found data 
route.get('/route/api/retrive',AutheGard,controll.RetriveData);

module.exports=route;