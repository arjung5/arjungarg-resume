const express= require('express');
const router=express.Router();

const userinfocontroller=require('../controller/usersInfoController');

router.post('/',userinfocontroller.postData);


module.exports=router;