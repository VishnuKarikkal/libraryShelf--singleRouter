const express = require("express");
const app=new express();
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+"/src/views");
app.get('/',function(req,res){
    res.render("index",{nav:[{link:"/index"},{link:"/signUp"},{link:"/logIn"}]});
});
app.get('/index',(req,res)=>
                {
                    res.render("index",{nav:[{link:"/index"},{link:"/signUp"},{link:"/logIn"}]
                });});
app.get('/signUp',(req,res)=>
                {
                    res.render("signUp",{nav:[{link:"/index"},{link:"/signUp"},{link:"/logIn"}]
                })});
app.get('/logIn',(req,res)=>
                {
                    res.render("logIn",{nav:[{link:"/index"},{link:"/signUp"},{link:"/logIn"}]
                })});
app.listen(2000);