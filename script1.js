//Get all the countries with a population of less than 2 lakhs using Filter function
let pop=new XMLHttpRequest();
pop.open("GET","https://restcountries.com/v3.1/all")
pop.send();


pop.onload=()=>{
    console.log("Connected...")
    let data=JSON.parse(pop.responseText)

let country= data.filter((obj) => {
    return obj.population<2 
    
})
console.log(country);
}