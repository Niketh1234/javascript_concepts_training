const objc= {
    data : ['india','china'],
    get last(){return this.data[this.data.length-1]},
    set push(country){this.data.push(country)}
}

console.log(objc.data)
objc.push='bangladesh'
console.log(objc.data)