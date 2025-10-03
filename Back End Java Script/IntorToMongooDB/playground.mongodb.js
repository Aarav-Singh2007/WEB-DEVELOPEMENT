

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([{
  "name": "Python",
  "Price": "20000",
  "Coordinator": "Aarav"
},
{
  "name": "Java",
  "Price": "18000",
  "Coordinator": "Rohan"
},
{
  "name": "C++",
  "Price": "15000",
  "Coordinator": "Meera"
},
{
  "name": "JavaScript",
  "Price": "22000",
  "Coordinator": "Vikram"
},
{
  "name": "C#",
  "Price": "17000",
  "Coordinator": "Ananya"
},
{
  "name": "Ruby",
  "Price": "16000",
  "Coordinator": "Kunal"
},
{
  "name": "Go",
  "Price": "25000",
  "Coordinator": "Simran"
},
{
  "name": "Kotlin",
  "Price": "19000",
  "Coordinator": "Ritika"
},
{
  "name": "Swift",
  "Price": "21000",
  "Coordinator": "Dev"
},
{
  "name": "PHP",
  "Price": "14000",
  "Coordinator": "Nisha"
}
]);


// Print a message to the output window.
console.log(`Done inserting data`);


