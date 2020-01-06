const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifytoken')

router.get('/',verify, async (req,res) => {
    // res.json({
    //     posts:{
    //         title: "test title",
    //         description: "you cannot access this data"
    //     }
    // });
    const userDetail = await  User.findOne({_id: req.user._id});
    res.json({
        success: true,
        user: {
            name: userDetail.name,
            email: userDetail.email
        }
    });
});


module.exports = router;
