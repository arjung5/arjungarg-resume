const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/resumeag',{ useUnifiedTopology: true , useNewUrlParser: true}).then(console.log(`The database is connected to server`)).catch((err)=>{
    console.log(`Opps There is error in connect to database : ${err}`);
});

const db= mongoose.connection;

module.exports=db;