//Print the following details name, capital, flag using forEach function
let apis=new XMLHttpRequest()
apis.open("GET","https://restcountries.com/v3.1/all")
apis.send()

apis.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(apis.responseText)
    respone.forEach((data) => {
        console.log(`
        Name:${data.name.common}
        Capital:${data.capital}
        Flags:${data.flags.png}
        `)
    });
}