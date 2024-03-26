const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const UserRoute = require("./UserRoute.js");

const app = express();

app.use(cookieParser());

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "asdfgh"
}));

app.use("/api", UserRoute);

app.get("/",function(req,res){
        res.send("hello world go to /api")
})


app.listen(3000,()=>{
        console.log("server run at 3000")
});