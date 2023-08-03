const fs = require('fs');

var data = " ";

fs.writeFile("newfile.txt", data, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("done writing!")
});