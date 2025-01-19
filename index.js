const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.get('/:id', (req , res) => {
    const { id:id } = req.params
    res.json(`This is ${id}`)
})

app.get("/d/IO", (req , res) => {
    const a = req.query
    res.json(a)
})

app.post("/create",(req,res)=>{
    res.json(req.body)
    res.json("Create")
})

app.listen(port, () => {
    console.log("chao")
})