const express=require("express");
var porta = process.env.PORT || 8080;
let app=express();

app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("inicioss")
})

app.get("/admin",(req,res)=>{
    res.render('admin/admin')
})


app.listen(porta,()=>{
    console.log("Servidor rodando na porta 3000")
})
