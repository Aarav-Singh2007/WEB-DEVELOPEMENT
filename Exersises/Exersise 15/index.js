//Clearing the cutter
import fs from "fs/promises";
import path from "path";
import fsn from "fs";
const basepath = "C:\\Users\\mituk\\OneDrive\\Desktop\\SigmaWeb developement course\\WEB-DEVELOPEMENT\\Exersises\\Exersise 15";
let files = await fs.readdir(basepath);
for (let item of files) {
    let ext = item.split(".")[item.split(".").length - 1];
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) {
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        } else {
            fs.mkdir(path.join(basepath, ext));
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        }
    }
}
