    import fs from "fs/promises"

    let a =  await fs.readFile("Aarav.txt")

    console.log(a.toString())