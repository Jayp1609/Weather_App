const port=process.env.PORT || 8000;
const express = require("express");
const app = express();
const path=require("path");
const layoutdirpath=path.join(__dirname,"./layout");
const viewspath=path.join(__dirname,"./templates/views");
const hbs=require("hbs");
const weatherdata=require("./data/weatherdata");
app.set("view engine","hbs");
app.use(express.static(layoutdirpath));
app.set("views",viewspath);




app.get("/",(req,res)=>{
   res.render("index");
});

//localhost:8000/weather?address=surat
app.get("/weather",(req,res)=>{
    const address=req.query.address;
    if(!address)
    {
        return res.send({
            error:"Enter address in search box"
        })
    }
    
    weatherdata.weatherdata(address,(error,{temperature,description,cityname}={})=>{
        if(error)
        {
          return res.send({error})
        }
        console.log(temperature,description,cityname);
        res.send({
            temperature,
            description,
            cityname
        })
    })
});

app.get("*",(req,res)=>{
    res.render("404");
});


app.listen(port,function(){
    console.log("server is running in port 8000");
});