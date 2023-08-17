const express = require('express');
const cors =require('cors');
const port = 7000;
const app = express();
const {getAllProducts,deleteOne,update,add} = require("./mongoDb/index")

const db = require('./mongoDb')

app.use(cors());
app.use(express.json())



app.get('/api/work',(req,res)=> {
   db.getAllProducts()
   .then((result)=>{
    return res.status(200).json(result)
   })
   .catch ((err)=>{
    console.log(err)
    res.status(500).send(err)
   })
})

app.delete("/api/work/:id",(req,res)=>{ 
   const id = req.params.id
  
  deleteOne(id).then((resp)=>res.status(204).send(resp)).catch((err)=>{
    res.status(500).send(err)})
  })
  
  app.put("/api/work/:id",(req,res)=>{
  update(req.params.id,req.body).then((result)=>res.status(202).send(result)).catch(error=>res.send(500).send(error))
  })
  
  app.post("/api/work",(req,res)=>{
    add(req.body).then((result)=>res.status(201).json(result)).catch(err=>res.status(500).send(err))
  })
  


app.listen(port, ()=>{
console.log(`listening on ${port}`);
})