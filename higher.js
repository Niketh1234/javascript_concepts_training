var marks =[34,66,77,88,99,3,4,5];
const processor = (p)=>{console.log(p)}
marks.forEach(processor);

let result = marks.map((p)=>p*5)
console.log(result)

messages = ['hello','world','you','are','so','beautiful']
console.log(messages.map(m=>m.toUpperCase()))

console.log(marks.filter(p=>p%2==0))

function sum(a,b,c,d){return a +" "+b;}

let total  = marks.reduce(sum,100); //0,34-34,66-100,100,
console.log(total)
console.log(messages.reduce(sum,'The String is:'))
console.log(messages.join(' '));
console.log(marks.slice(1,4))
marks = [...marks,4,4,5,6,900]
console.log(marks)