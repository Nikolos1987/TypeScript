import express from "express";
import path from "path";
import fs from 'fs';


const jsonParser = express.json();
const app=express()
const __dirname=path.resolve();

app.use(express.static(path.resolve(path.resolve(),'front')));

app.get('/', (req, res) => { 
  
    
    fs.readFile('db/db.backup.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});


app.get('/api/products', (req, res) => { 
    
    fs.readFile('db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

app.get('/api/basket', (req, res) => { 
    fs.readFile('db/userCart.json', 'utf-8', (err, data) => {      
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

app.get('/api/pagination', (req, res) => { 
   
        fs.readFile('db/products.json', 'utf-8', (err, data) => {            
 
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
         let pagin=JSON.stringify(JSON.parse(data).slice(1,6))  
             res.send(pagin);
        }
    })
});


app.post('/1',jsonParser,(req, res) => {

let startCount=Number(req.body.count)
let countCards=startCount+6
fs.readFile('db/products.json', 'utf-8', (err, data)=>{
let pagin=JSON.stringify(JSON.parse(data).slice(startCount,countCards)) 
res.send(pagin)
})
});
app.post('/2',jsonParser,(req,res)=>{    
    let startCount=Number(req.body.num)

   
})

app.listen(5000)