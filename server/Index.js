const express = require("express");
const app = express();

const mysql = require("mysql")

const db = mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"Fvclg@051998",
        database:"todolist",
    }
)

const cors = require('cors')

app.use(cors())

app.use(express.json())

app.listen(3001, ()=>{
    console.log('rodando server')
})

app.get('/',(req,res)=>{
    console.log("request get recebido")
    const SQL = "SELECT * FROM todolist.tasks;";

    db.query(SQL, (err,result)=>{
        if(err) console.log(err)
        else {
            console.log('RESULT\n' + result)
            res.send(result)}
    })

})


app.get('/insert',(req,res)=>{
    res.send("insert")
    const SQL = "INSERT INTO tasks (status,content) VALUES (1,'exemplo de texto 2')";

    db.query(SQL, (err,result)=>{
        console.log(err)
    })
    console.log("funcao 2 rodou")
})

app.post('/update',(req,res)=>{
    const id = req.body.id
    const content = req.body.content

    const SQL = "INSERT INTO tasks (status,content) VALUES (1,'exemplo de texto 2')";

    db.query(SQL, (err,result)=>{
        console.log(err)
    })

    console.log("id = " + id + "\ncontent = "+content)
    console.log("request funcionou 2")
})