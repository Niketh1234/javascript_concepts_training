let func = (param1,param2)=>{
console.log(param1 + param2)
param1();//will call calc method
}

// func();
// func(1)
// func(3,4)
// func(4,5,6,7,"dfdlfj")
// func("anil","dlfkj")
// func(4.5,99.7)
// func("44",44);

func(calc,(a,b)=>{ console.log(a + b)})

function calc(){
    console.log('hello world')
}
function generator(){
    return ()=>{console.log('generateor function called')}
}
  generator()();
 
 function* sequence(p){
  let i = p;
  while(true){
    yield i++;
  }
 }

 let seq = sequence(100);
 console.log(seq.next().value)
 console.log(seq.next().value)
 console.log(seq.next().value)
 console.log(seq.next().value)

 function px(){
    return function*(){
        let i = 0;
        while(true){
          yield i++;
        }}
 }
 console.log(px()().next().value)
 //dynamic functions
 const add = Function('num1','num2','return num1 + num2');
 result  = add(4,5);
 console.log(result)
 //
 function* print(n){
  for(i=1;i<10;i++)
  yield `${n} * ${i} = ${1 * n}`
 }
 //yield `${n} * 2 = ${2 * n}`
 //yield `${n} * 3 = ${3 * n}`}
 //const result = print(8);
 for( x of print(4)){
  console.log(x)
 }

 function addnums(a,b){
  let sum = 0;
  for( n of arguments)
    sum += parseInt(n)
  console.log(sum)
 }
 addnums(4,4,5,5,6)