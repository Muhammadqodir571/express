const express = require('express')
const usersRoutes= require('./routes/users')
const mianRoutes= require('./routes/main')
const path = require('path')
//const {engine} = require('express-handlebars')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/users',usersRoutes.router)
app.use('/',mianRoutes)
app.use(express.static(path.join(__dirname,'public')))
//app.set('view engine','pug')
//app.engine('.hbs', engine({extname: '.hbs'}));
//app.set('view engine', '.hbs');
//app.engine('.hbs',ejs({extname: 'ejs'}))
app.set('view engine','ejs')
app.set('views','views')
app.use((req,res)=>{
    res.status(404).render('404',{
        title:"page not found"
    })
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{


    console.log(`server running ${PORT}`);
})