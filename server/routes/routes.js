
const express=require('express');
const route=express.Router();
const temp=require('../services/templet');
const controll=require('../controller/APIcontroll');
const avaterupload=require('../middleware/uplodsFunc');
const AutheGard=require('../middleware/Authentication');
const Validaror=require('../middleware/UserValidation');

//all render ejs templet

//signup templet
route.get('/Signup',temp.SignupTemp);

//login templet
route.get('/Login',temp.LoginTemp);

//inbox templet
route.get('/Inbox',temp.InboxTemp);

//all api 

//Signup api ("function import module")
route.post('/route/api/signup',avaterupload,Validaror.addUserValidator,Validaror.ValidatiorHandaler,controll.Signup);

//Login api
route.post('/route/api/login',controll.Login);

//Inbox Read data api

//Found data 
route.get('/route/api/retrive',AutheGard,controll.RetriveData);

module.exports=route;