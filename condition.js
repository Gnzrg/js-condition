//assignment-1

let i= 4>3 ;//true
console.log(i)
let iii=4<3;//false
console.log(iii)
let ii= 4>=3; //true
console.log(ii)
let iv= 4<=3; //false
console.log(iv)
let v= 4==4; //true
console.log(v)
let vi= 4===4; //true
console.log(vi)
let vii= 4!=4; //false
console.log(vii)
let iix= 4!==4; //false
console.log(iix)
let ix= 4!="4"; //false
console.log(ix)
let x= 4=="4" //true
console.log(x)
let xi= 4==="4" //false
console.log(xi)
   


//2
let one = 4 > 3 && 10 < 12;  //true
console.log(one)
let two = 4 > 3 && 10 > 12;  //false
console.log(two)
let three = 4 > 3 || 10 < 12; //true
console.log(three)
let four = 4 > 3 || 10 > 12; //true 
console.log(four)
let five = !(4 > 3); //false
console.log(five)
let six = !(4 < 3); //true
console.log(six)
let eight = !(4 > 3 && 10 < 12); //false
console.log(eight)
let nine = !(4 > 3 && 10 > 12); //true
console.log(nine)
let ten = !(4 === "4"); //true
console.log(ten)

//3
/*let myAge = 20;
let yourAge =  prompt("Насаа оруулна уу:");
if (myAge > yourAge){
    console.log("Older")
} else {
    console.log("Younger")
}
*/
//4
/*var text;
let day = prompt('Өдөр')
console.log(typeof(day))
switch(day){
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
text="Ажлын өдөр";
break;
    case "6" :
    case "7" :
        text="Амралтын өдөр";
        break;
       
}
//console.log(text)
*/

//5

let hours= 40;
let ratePerHour= 28;
let calcu= hours*ratePerHour;
console.log(calcu)


//temtseen

let a = 96;
let b = 108;
let c = 85;
let ateam = a + b + c;

let d = 88 ;
let e = 91 ;
let f = 110 ;
let bteam = d + e + f;


if (ateam > bteam) {
    console.log("yalsan");
}
else if (ateam === bteam){
    console.log("tentsem");
}
else{
    console.log("yalagdsan");
}



//easy
//1

/*let number = parseInt(prompt ('1-5 hoorond too oruulna uu'))
switch(number){
    case 1 : 
    console.log('A')
    break;
    case 2 : 
    console.log('B')
    break; case 3 : 
    console.log('C')
    break; case 4 : 
    console.log('C')
    break; case 5 : 
    console.log('D')
    break;
    default:
    console.log('invalid number')
    break;
}*/

//2

/*let month = parseInt(prompt ('enter month'))
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:    
    console.log('31 honogtoi')
    break;
    case 2:
    console.log('28-29 honnogtoi')
    break;
    case 4:
    case 6:
    case 9:
    case 11:
    console.log('30 honogtoi')
    break;
    default:
        console.log('invalid month')
        break;
}
*/

//3

/* let n =parseInt(prompt('durinn too oruulna uu'))
let n1 = n%3;
let n2 = n%7;
if(n1===0 || n2===0){
console.log(true)
}
else{
    console.log(false)
}
*/

//6

/* let numb = parseInt(prompt('durin too orulna uu'))
let positive = numb%2 ;
if(positive===0){
    console.log('odd')
}
else{
    console.log('even')
}   */

//4  7


/*let numb2 = parseInt(prompt('durin too oruulna uu'))
if(numb2>0){
    console.log('positive')
}
else{
    console.log('negative')
}*/

//5  
 
let height = parseFloat(prompt('enter your height'))
let height2 = height*height
let weight = parseInt(prompt('enter your weight'))
let mass = (weight/height2)
if(mass>=18 && mass<24.9){
    console.log('Эрүүл')
}
else if(mass<=17.9){
    console.log('Жингийн дутагдалтай')
}
else if(mass>=25 && mass<29.9){
    console.log('Илүүдэл жинтэй')
}
else if(mass>=30){
    console.log('Хэт таргаллалттай')
}
console.log("mass",mass)