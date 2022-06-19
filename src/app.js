const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 7000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));



app.get("/",(req,res)=>{
    res.render("index");

});

app.get("/about",(req,res)=>{
    res.render("about");

});

app.get("/contact",(req,res)=>{
    res.render("contact");

});

app.get("/account",(req,res)=>{
    res.render("account");

});






















app.listen(port, () => {
    console.log(`running on the port no ${port}`);
  });