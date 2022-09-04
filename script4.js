//Print the total population of countries using reduce function

let ap=new XMLHttpRequest()
ap.open("GET","https://restcountries.com/v3.1/all")
ap.send()

ap.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(ap.responseText)
    let details=respone.reduce((init,curr)=>{
          return init+curr.population       //adding all country population
    },0)
    console.log(`Total population of countries ${details}`)//display sum of population
}