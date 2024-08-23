const obj1 = {
    mesg:'welcome to actalwnt',
    show:function(){
        console.log(this.mesg)
    }
}
obj1.show();
obj1.mesg = "dfdf";
const obj2 = class  {
    show(){
        console.log('object with class')
    }
}
new obj2().show();
class Stock{
    id;
    name;
    rate;
    constructor(id,name,rate){
        this.id =id;
        this.name =name;
        this.rate = rate
    }
    display(){
        this.opeeningprice = 90;
        console.log(`${this.id} ${this.name} ${this.rate}`)
    }
}
let instance1 = new Stock(1,'itc',444);
instance1.id =44;
instance1.display();