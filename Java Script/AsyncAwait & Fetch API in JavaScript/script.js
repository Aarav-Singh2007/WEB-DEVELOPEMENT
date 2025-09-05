// async function getdata(){
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve(455)
//        }, 3000); 
//     })
// }
async function getdata(){
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json()
   return data
    //  console.log(x)
    //  return(355)
}
async function main() {
    console.log("Loading modules...")
    console.log("soing soemthing else")
    console.log("load data")
    
    let data = await getdata()
    console.log(data)
    console.log("prossed data")
    
}
main()