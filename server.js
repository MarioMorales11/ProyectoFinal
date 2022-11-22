require("dotenv").config()
const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')

const routes=require('./routes')

const app=express()
app.set(process.env.PORT||9001)
const dbOptions={
    host:process.env.DB_HOST||'localhost',
    port:process.env.DB_PORT|| 3306,
    user:process.env.DB_USER||'root',
    password:process.env.DB_PASSWORD||'',
    database:process.env.DB_NAME||'países'
}
//Middlewares
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())
//routes
app.get('/',(req,res)=>{
    res.send('Welcome to my api')
})
app.use('/api',routes)
//server running
app.listen(app.get('port'),()=>{
    console.log('server running on port',app.get('port'))
})