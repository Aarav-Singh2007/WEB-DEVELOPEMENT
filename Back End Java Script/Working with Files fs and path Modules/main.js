const fs = require("fs")
console.log("Starting")
fs.writeFile("Aarav2.txt", "Aarav is a good guy", ()=>{
    fs.readFile("Aarav.txt", (error, data )=>{
        console.log(error, data.toString())
    })
    console.log("Done")
} )
fs.appendFile("Aarav.txt", "Aarav is cool", (e,d)=>{
console.log(d)
})
// fs.writeFileSync("Aarav.txt", "Aarav Singh is a good canddtate")
console.log("Ending")