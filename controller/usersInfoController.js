const User = require('../models/users');

module.exports.postData = (req, res) => {
    console.log('entered in controller')
    User.findOne({ email: req.body.email }, (err, data) => {
        if (err) {
            console.log(`Error in fetchinf user`);
            return;
        }
        else if (!data) {
            User.create(req.body, (err, value) => {
                if (err) {
                    console.log(`Error in creating user`);
                    return;
                }
                console.log(value);
                req.flash('success','Thanks I will Get Back soon...'); 
                return res.redirect('back');
            })
        }
        else {
            req.flash('error','Opps you must have contacted before...');
            return res.redirect('back');
        }
    })
}
