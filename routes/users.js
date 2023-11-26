const express= require('express')
const router= express.Router()
const path = require('path')
let users = []
router.get('/add-users',(req,res)=>{
   res.render('add-users',{
    title:"Add new user"   
   })
   
})
router.post('/users',(req , res)=>{
    //tempelate engane
    users.push({username:req.body.username, email:req.body.email, age:req.body.age})

    
    res.redirect('/')
})


exports.router =router
exports.users=users