// let obj ={
//     a:1,
//     name:"Aarav"
// }
// console.log(obj)
// let animal ={
//     eats: true
// }
// let rabbit={
//     jumps: true
// }
// rabbit.__proto__ = animal

class Animal{
    constructor(){
        console.log("New object is created")
    }
    eats(){
       console.log("Kha Raha  hu")

    }
    jumps(){

        console.log("Kood raha hu")
    }
}
let a = new Animal
console.log(a)