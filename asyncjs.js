var dishes =['idly','sambar','chutney'];
function addDish(){
   return new Promise((done,notdone)=>{
    done('dfdjflj')
    isDone = false;
    setTimeout(() => {
        dishes.push('pulissery')
        isDone=true
        if(isDone)
            notdone('problem in adding data to array');
        else
            done('data added suceesfully to array');
    }, 2000);
    });
}
  function callmethods(){
     let p = addDish()
     p.then((result)=>{
        console.log(result)
        console.log(dishes)
     }).catch((error)=>{
        console.log(error)
     });
    console.log(dishes)
}
callmethods();

let p  = fetch('https://fakestoreapi.com/products');

p.then((res)=>{return res.json()})
.then((data)=>{
    console.log('fetch'+JSON.stringify(data))
})

async function somethod(){
    return 1
}
somethod().then(()=>{console.log('somemethod commpleted')})