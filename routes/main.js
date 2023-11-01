const {Router} =require('express')
const path =require('path')

const routers=Router()

routers.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'..','views','main.html'))
})


module.exports = routers