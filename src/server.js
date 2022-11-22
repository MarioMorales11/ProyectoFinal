require("dotenv").config();
const express=require('express');
const mysql=require('mysql2');
const conn=require('express-myconnection');
const routes=require('./routes/routes');

const app=express();
const PORT=process.env.PORT||5001;
const dbOptions={
    host:process.env.DB_HOST||'localhost',
    port:process.env.DB_PORT|| 3306,
    user:process.env.DB_USER||'root',
    password:process.env.DB_PASSWORD||'',
    database:process.env.DB_NAME||'países'
};
// //Middlewares
app.use(conn(mysql,dbOptions,'single'));
app.use(express.json());
app.use('/',routes);
// //routes
app.listen(PORT,()=>{
    console.log('server running on port 5000');
});
