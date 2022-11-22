exports.getAll=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM país',(err,rows)=>{
            if(err) return res.send(err) 

            res.json(rows)
        })
    })
}
exports.getOne=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM país WHERE Id = ?',[req.params.value],(err,rows)=>{
            if(err) return res.send(err) 

            res.json(rows)
        })
    })
}
exports.create=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO país set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err) 

            res.send('Pais Insertado')
        })
    })
}
exports.update=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE país SET ? WHERE Id=? ',[req.body,req.params.value],(err,rows)=>{
            if(err) return res.send(err) 

            res.send('El Pais ha actualizado')
        })
    })
}
exports.deleteItem=(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM país WHERE Id=?',[req.params.value],(err,rows)=>{
            if(err) return res.send(err) 

            res.send('El Pais ha sido eliminado')
        })
    })
}
