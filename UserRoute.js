var express = require("express");
var router = express.Router();
var UserModel = require("./data.js");
// var session = require("express-session");
// var cookieParser = require("cookie-parser");

// router.use(cookieParser());
// router.use(session({
//     resave:false,
//     saveUninitialized:false,
//     secret:"asdfghj",
// }));

router.get("/",function(req,res){
    res.send("hello world <br><br> /profile /profile/:name <br> /create /allUse <br> /createban <br> /createcookie")
})

router.get("/profile",function(req,res){
    res.send("hello from profile")
})

router.get("/profile/:name",function(req,res){
    res.send(`hello from ${req.params.name}`);
})

router.get("/create",async function(req,res){
    const cresteUser = await UserModel.create({
        name:"dhruv",
        age:20,
    });
    res.send(cresteUser);
});

router.get("/allUser",async (req,res)=>{
    const allUser = await UserModel.find();
    res.send(allUser);
})

router.get("/createban",function(req,res){
    req.session.ban = true;
    res.send("go to checkban");
})

router.get("/checkban",function(req={},res){
    if (req.session.ban === true){
        res.send("you are banned go to removeban");
    }
    else {
        res.send("Not banned go to creteban");
    }
    
})

router.get("/removeban",function(req,res){
    req.session.destroy(function(err){
        if(err) throw err;
        res.send("ban remove");
    })
    
})

router.get("/createcookie",(req,res)=>{
    res.cookie("age",25);
    res.send("cookie created go to readcookie");
})

router.get("/readcookie",(req,res)=>{
    console.log(req.cookies);
    res.send(`check VS console & go to deletecookie`);  
})

router.get("/deletecookie",(req,res)=>{
    res.clearCookie("age");
    res.send("Cookie Clear")
})

module.exports = router;