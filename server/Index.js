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


app.get('/newTask',(req,res)=>{

    const SQL = 'INSERT INTO tasks (content) VALUES ("")';

    db.query(SQL, (err,result)=>{
        if(err) console.log(err)
        else {
            console.log('RESULTxxx\n' + result)
            const SQL = "SELECT * FROM todolist.tasks;";

            db.query(SQL, (err,result)=>{
                if(err) console.log(err)
                else {
                    console.log('RESULT\n' + result)
                    res.send(result)}
            })
            }
    })
})

app.post('/update',(req,res)=>{
    const id = req.body.id
    const content = req.body.content
    const status = req.body.status

    const SQL = 'UPDATE Tasks SET content = "' +content+'", status = '+status+' WHERE idTasks = '+id+';';

    db.query(SQL, (err,result)=>{
        console.log(err)
    })

    console.log("id = " + id + "\ncontent = "+content + "\nstatus = "+status)
    console.log("request funcionou 2")
})

app.post('/delete',(req,res)=>{
    const id = req.body.id

    const SQL = 'DELETE FROM `todolist`.`tasks` WHERE (`idTasks` = "'+id+'");';

    db.query(SQL, (err,result)=>{
        console.log(err)
    })
})