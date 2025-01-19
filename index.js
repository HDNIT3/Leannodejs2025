const express = require('express');
const app = express();


const hostname = 'localhost';
const port = 3000;


app.get("/",(req,res)=>{
    res.send('<h1>Hello word chào </h1>')
})

app.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}/`)
})