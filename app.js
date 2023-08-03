const fs = require('fs');
const addNumber = require('./mod3');
var data = " ";

fs.writeFile("newfile.txt", data, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("done writing!")
});

addNumber(22, 15);