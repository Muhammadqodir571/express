//midelewares => routs.parces.json form


const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',(req,res,next)=>{
   

    next()
})
app.use('/add-users',(req,res,next)=>{
    res.send(`
    <form action="/users" method="POST">
    <div>
    <input type="text" name="username">
    </div>
    <div>
    <input type="number" name="age">
    </div>
    <div>
    <button type="Submit"> bosish</button>
    </div>
    </form>
    `)

})

app.use("/users",(req,res,next)=>{
    console.log(req.body);
    next()
})
app.use('/',(req,res,next)=>{
   
    res.send('<h1>Bosh sahifa</h1>')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{


    console.log(`server running ${PORT}`);
})