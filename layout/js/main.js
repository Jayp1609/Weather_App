
var fetchweather="/weather";
const form=document.querySelector("form");
const search=document.querySelector("input");
const descri=document.querySelector(".description");
const temp=document.querySelector(".temperature");
const place=document.querySelector(".placename");
const info=document.querySelector(".info");
const dateElement = document.querySelector('.date');
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()].substring(0, 3);


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    place.textContent="loading...";
    temp.textContent="loading...";
    descri.textContent="loading..."; 
    const locationApi=fetchweather+"?address="+search.value;

    fetch(locationApi).then(response=>{
        response.json().then(data=>{
             if(data.error)
             {
                place.textContent="";
                temp.textContent="";
                descri.textContent=""; 
             }
             else
             {
                
                place.textContent=data.cityname;
                temp.textContent=(data.temperature-273.5).toFixed(2)+String.fromCharCode(176)+String("c");
                descri.textContent=data.description;
             }

        });
    });
});