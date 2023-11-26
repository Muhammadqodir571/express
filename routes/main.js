const {Router} =require('express')
const path =require('path')
const {users}=require('./users')


const routers=Router()

routers.get('/',(req,res)=>{

   
   res.render('main',{
      title:"users list",
      users
   })
})


module.exports = routers
