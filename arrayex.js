var countries = ['india','nepal','australia','italy']
countries.push('america')

// do  while
// while
// for()
countries.shift()
countries.unshift('japan')
    for(let x in countries){
        console.log(x)
        console.log(countries[x])
    }
    for(let x of countries){
        console.log(x)
    }
    countries.pop();
    for(let i =0;i<countries.length;i++)
        {
        console.log(countries[i])
    }