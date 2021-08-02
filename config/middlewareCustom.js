module.exports.setFlash=(req,res,next)=>{
    console.log(`entered in middleware as : ${req}`);
    res.locals.flash={
        'success':req.flash('success'),
        'error':req.flash('error')
    }
    next();
}