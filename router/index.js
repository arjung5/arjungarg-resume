const express= require('express');
const router=express.Router();

const homepagecontroller=require('../controller/homepagecontroller');

router.get('/',homepagecontroller.index);

router.use('/userinfo',require('./userinfo'));

module.exports=router;