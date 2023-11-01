const express = require('express')
const usersRoutes= require('./routes/6-darsrouter')
const mianRoutes= require('./routes/main')
const path = require('path')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(usersRoutes)
app.use(mianRoutes)
app.use(express.static(path.join(__dirname,'public')))
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))

})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{


    console.log(`server running ${PORT}`);
})