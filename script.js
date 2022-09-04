
//Get all the countries from the Asia continent /region using the Filter function
let api=new XMLHttpRequest();
api.open("GET","https://restcountries.com/v3.1/all")
api.send();


api.onload=()=>{
    console.log("Connected...")
    let data=JSON.parse(api.responseText)

let country= data.filter((obj) => {
    return obj.region==="Asia"
    
})
console.log(country);
}

//Get all the countries with a population of less than 2 lakhs using Filter function
