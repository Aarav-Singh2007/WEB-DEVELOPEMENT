let arr = [2, 4, 6, 8, 111]
// let newarr = arr.map((e) => {
//     return e ** 2
// })
// console.log(newarr)


const greaterthan7 = e => {
              if (e>7){
                return true
              }
              return false
}

console.log(arr.filter(greaterthan7))