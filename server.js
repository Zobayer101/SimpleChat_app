//extrenal import 
const express=require('express');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const DataBase=require('./server/database/DBconnect');
const route=require('./server/routes/routes');

//internal import
const path=require('path');
const app=express();

//functionality enable
dotenv.config();
const PORT=process.env.PORT||8080;
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//set a view engine
app.set('view engine', 'ejs','home.ejs');

//Data Base connection function call
DataBase();

//Route handller 
app.use('/',route);

// public foulder create
app.use('/img',express.static(path.relative(__dirname,'assets/img')));
app.use('/css',express.static(path.relative(__dirname,'assets/css')));
app.use('/js',express.static(path.relative(__dirname,'assets/js')));

//error handler
app.use((error,req,res,next)=>{
    if(error){
        res.status(500).send(error.message)
        console.log(error.message);
    }else{
        res.status(500).send('This is a server side error');
    }
})

//create a server
app.listen(PORT,()=>{
    console.log(`Server was run on http://localhost:${PORT}`);
})
