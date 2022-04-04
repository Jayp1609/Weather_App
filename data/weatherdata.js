const bodyParser = require("body-parser");
const request=require("request");
const constants=require("../configure");

const weatherdata=(address,callback)=>{
    const url=constants.constants.openweathermap.BASE_URL+encodeURIComponent(address)+'&appid='+constants.constants.openweathermap.SECRET_KEY;
   
    request({url,json:true},(error,{body})=>{
      
      if(error)
      {
         callback("Can't fatch data",undefined);
      }
      else if(!body.main || !body.main.temp || !body.name || !body.weather)
      {
          callback("No data found")
      }
      else
      {
          callback(undefined,{
              temperature : body.main.temp,
              description : body.weather[0].description,
              cityname: body.name
          })
      }

    });
}

module.exports={weatherdata};