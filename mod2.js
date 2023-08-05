module.exports.groceryItem = class groceryItem{
    constructor(iName, quantity, price, weight){
        this.iName = iName;
        this.quantity = quantity;
        this.price  = price;
        this.weight = weight;
    }

    printStatement = ()=>{
       return console.log(this.iName + " " + this.quantity + " " + this.price + " " + this.weight);
    }
}


module.exports.customer = class customer{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address  = address;
    }

    printStatement = () =>{
       return console.log(this.name + " " + this.age + " " + this.address);
    }
}

