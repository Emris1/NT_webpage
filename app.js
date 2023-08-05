const fs = require('fs');
const mod2  = require('./mod2');
var data = " ";

fs.writeFile("newfile.txt", data, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("done writing!")
});



var Nehemiah = new mod2.customer("nehemiah", 29, "Arima");
Nehemiah.printStatement();


var patatoes = new mod2.groceryItem("patatoes", 200, 500, 2000);
patatoes.printStatement();

