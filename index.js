const express=require('express');
const port=3031;
const flash = require('connect-flash');
const session=require('express-session');
const app =express();
const customeMw=require('./config/middlewareCustom');
const db=require('./config/mongoose');
const cookieParser = require('cookie-parser');



app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views','./views');



app.use(session({
    name:'bonjour',
    //ToDo change the secret before deployemnt in production mode
    secret:"arjungarg",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*60)
    }
}));


app.use(flash());


app.use(customeMw.setFlash);
app.use('/',require('./router'));
app.listen(port,(err)=>{
    if(err){
        console.log(`Thre is error in runningserve`);
    }
    else{
        console.log(`The serve is running at ${port}`);
    }
})