class Visitors{
    #name = "anil";
    purpose;
    date_time;
    process(){
        console.log(this.#name);
    }
    static count = 0;
    get name(){return this.#name;}
    set name(d){this.#name = d;}
}
let instance1 = new Visitors();
instance1.name = "satvik"
instance1.process();
 console.log(instance1.name);
 console.log(instance1.process)
 
// Visitors.prototype.show=()=>{}
// v.process();
// functions are first class objects

function Visitor(name,purpose,dateofvisit){
    this.name = name;
    this.purpose = purpose
    this.show = function(){
        console.log(name+ purpose+ dateofvisit);
    }
    console.log('function as a object')
}
let v = new Visitor('dfdf','dfdf','12-jul-2024');
console.log(v['name'])

 
