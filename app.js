const express=require("express");

let app=express();

app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("inicio")
})

app.get("/admin",(req,res)=>{
    res.render('admin/admin')
})


app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})