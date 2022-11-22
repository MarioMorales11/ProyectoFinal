const express=require('express');
const routes=express.Router();

const{getAll,getOne,create,update,deleteItem,}=require("../controllers/metodos");
routes.get("/getAll",getAll);
routes.get("/getOne/:value",getOne);
routes.post("/create",create);
routes.put("/update/:value",update);
routes.delete("/delete/:value",deleteItem);

module.exports=routes;