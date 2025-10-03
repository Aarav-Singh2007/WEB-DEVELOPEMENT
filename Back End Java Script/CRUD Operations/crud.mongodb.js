use("CrudDb")
// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Aarav web development",
//     price: 0,
//     status: "active",
//     tags: ["frontend", "backend", "database"],
//     projects: 45
// })
// db.courses.insertMany([
//     {
//   "name": "Python",
//   "Price": "20000",
//   "Coordinator": "Aarav"
// },
// {
//   "name": "Java",
//   "Price": "18000",
//   "Coordinator": "Rohan"
// },
// {
//   "name": "C++",
//   "Price": "15000",
//   "Coordinator": "Meera"
// },
// {
//   "name": "JavaScript",
//   "Price": "22000",
//   "Coordinator": "Vikram"
// },
// {
//   "name": "C#",
//   "Price": "17000",
//   "Coordinator": "Ananya"
// },
// {
//   "name": "Ruby",
//   "Price": "16000",
//   "Coordinator": "Kunal"
// },
// {
//   "name": "Go",
//   "Price": "25000",
//   "Coordinator": "Simran"
// },
// {
//   "name": "Kotlin",
//   "Price": "19000",
//   "Coordinator": "Ritika"
// },
// {
//   "name": "Swift",
//   "Price": "21000",
//   "Coordinator": "Dev"
// },
// {
//   "name": "PHP",
//   "Price": "14000",
//   "Coordinator": "Nisha"
// }
// ])

// let a = db.courses.find({price: 0})
// console.log(a)

// db.courses.updateMany({price: 0}, {$set: {price: 1000}})
db.courses.deleteMany({price: 1000})