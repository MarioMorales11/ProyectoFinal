const express=require('express')
const routes=express.Router()

routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM país',(err,rows)=>{
            if(err) return res.send(err) 
            res.json(rows)
        })
    })
})
routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO país set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err) 

            res.send('Pais Insertado')
        })
    })
})
routes.delete('/:Id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM país WHERE Id=?',[req.params.Id],(err,rows)=>{
            if(err) return res.send(err) 

            res.send('El Pais ha sido eliminado')
        })
    })
})
routes.put('/:Id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE país set ? WHERE Id=? ',[req.body,req.params.Id],(err,rows)=>{
            if(err) return res.send(err) 

            res.send('El Pais ha actualizado')
        })
    })
})
module.exports=routes