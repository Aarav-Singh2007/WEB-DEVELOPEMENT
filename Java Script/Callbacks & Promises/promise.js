let prom1 = new Promise((resolve, reject) => {
   setTimeout(() => {
    let sucess = true;
   if(sucess){
    console.log("Sucess 1")}2000})
   }, 2000); 
    // else{
    //     console.log("New methord learnt 1")
    // }
   
    setTimeout((a) => {
        console.log(a)
    }, 1000);
    


let prom2 = new Promise((resolve, reject) => {
   let sucess = true;
   if(sucess){
    console.log("Sucess 2")}1000})
    // else{
    //     console.log("New methord learnt 2")
    // }
   
   

let p3 = Promise.allSettled([prom1 , prom2])
p3.then ((a)=>{
console.log(a)
}).catch ((b)=>{
    console.log(b)
})