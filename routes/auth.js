const express=require('express')
const router=express.Router()
const {register,login,forgotPassword,resetPassword,verifyEmail}=require('../controllers/auth')
const  token_delete=require('../props/autodeleteToken')
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:token').patch(resetPassword)
router.route('/verify/:id/:token').get(verifyEmail)
router.route('/autodeletetoken').get( token_delete)
module.exports=router;