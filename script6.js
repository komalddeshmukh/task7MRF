//Print the country which uses US Dollars as currency.
let apiss=new XMLHttpRequest()
apiss.open("GET","https://restcountries.com/v3.1/all")
apiss.send()

apiss.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(apiss.responseText)
    let details=respone.filter((data)=>{
    let currencies=data.currencies
    for (let key in currencies) {
      if(currencies[key].name==="United States dollar")
      { //checking country currencies 
        return data 
      }
    }
        
    })
    console.log(details.length, details[0].currencies) //displaying count of country using USD
}