var num
console.log(num)
 num = 900;
const pi = 3.14
let  x = "anil"
console.log(x);

function  showdata(){
    let div = document.getElementById('placeholder')
    div.innerHTML = '<input type=text value=actalent/>'
    console.log('num:'+num);
    if( num === 900)
        console.log('big')
    else
       console.log('small')
    // switch(num){
    //     case 120:
    //         break;
    //         case  444:
    //             break;
    //             default:
    // }
}
 function  showresult(){
     
    let txtchar = document.getElementById('txtchar').value;
   switch(txtchar){
    case 'a':
        case 'e':
            case 'i':
                case 'o':
                    case 'u':
                        console.log('vowel')
                        break;
                        default:
                        console.log('consonant')
                        break;
   }
 }


function add(){
    console.log(arguments[0]+arguments[1]+arguments[2])
}
add(4,59)