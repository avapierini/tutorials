let age=25;
let year=2019;

//log things to console
//console.log(age,year);


/* age=30;
console,log(age);

const points=100
console.log(points); */

var score = 75;
console.log(score);

//strings
console.log('hello, world');

let email= 'mario@thenetninja.co.uk';
console.log(email);
//string concatebation
 let FirstName= 'Brandon';
let lastName='Sanderson';

let FullName = FirstName +''+ lastName;
console.log(fullName);

//getting characters
console.log(FullName)
//getting characters
console.log(FullName[2]);

//string methods
console.log(fullName.toUppercase());
let result=FullName.toUpperCase());
console.log(result, fullName)

//console.log(result)
let age=25;
//console.log(age==25);
//console.log(age==30);
//console.log(age!=30);
//console.log(age > =20);
//console.log(age < 20);
//console.log(age < = 25);
//console.log(age> =25);

let name='Shaun'
console.log(name=='Shaun');
console.log(name=='Shaun');
console.log(name>'crystal');
console.log(name>'Shaun');
console.log(name>'crystal');

// type conversation
let score='100'
//score = number(score);
// console.log(score + 1);
// console.log(typeof score);

//let result = Number('hello');
//let result =string(50);
//let result= Boolean(0);
let result= Boolean('0');

console.log(result,typof result)

// for loops

//for(let i = 0); i < 5;i++){
//console.log('in loop:',i)
  
//}
//console.log('loop finished');

const names=[ 'Shaun','Mario','Luigi'];

for(let i = 0;i < names.length;i++){
//console.log(names[i]);
  //let html= '<div>${names[i]</div>';
  console.log(html);
}
//while loops

for(let i=0; i < 5; i++){
  console.log('in loop:',i);
  
}
//if statements
//const age = 25

//if (age > 20){
//console.log('You are over 20 years old')

//}

//cost ninjas=['Shaun', 'Ryu', 'chun-li','Yoshi'];

//if(ninjas.length > 4)

//console.log(" Thats alot of ninjas")

//}

const pasword='pass';
 if(password.length >=8){
  console.log('That password is long enough!');
 }
//logical operators - OR|| and AND &&

const password= 'p@ss'
if(password.length >= 12)
  console.log('that password is mighty strong');
} else if(password.length >= 8){
console.log('that password is long enough');
}else {
  console.log('that password is not long enough');
}
//logical NOT(!)

let user=false;

if(user)=false;

if(!user){
  console.log('You must be logged in to comtinue')
  
}
console.log(true);

// break and continue

const scores=[50,25,0,30,100,20,10]

for(let i=0;i< scores.length; i++){

  if(scores[i]===0{
    continue
  }
  console.log('Your score:',scores[i]);

  if(scores)[i]===100){
    console.log('congrats,you got the top score!');
    break;
  }
}

//switch statements

const grade='D';

switch (grade){
  case 'A';
    console.log('You got an A!')

      case 'B';
    console.log('You got an B!')

      case 'C';
    console.log('You got an C!')

      case 'D';
    console.log('You got an D!')

    case 'E';
    console.log('You got an E!')

  default:
    console.log('not a valid grade')
}

//variables & block scope

const age=30;

if(true){
const age= 40;
  const name='Shaun';

  console.log('inside 1st code block:', age, name);
  

  if(true){
const age= 50;

  console.log('inside 2nd code block:', age, name);
}
    console.log('outside code block:', age, name);
}



//function declaration
const speak =function(){
  Console.log('good day!')

  //Greet();
  //Greet();
 // Greet();

  speak();
  speak();
  speak();

  //function declaration

function greet(){
console.log('hello there ');
}

//function expression 
const speak= function(){

console.log('good day!')
};

// returning values 

  //const speak = function(name ='luigi', time='night'){
//  console.log('good ${time} ${name} ');
//};

  const CalcArea= function(radius){
    return 3.14* radius**2

    const area= CalcArea(5);
    console.log(area);

    const caclVol= function(area){
      
    };

      <h2> This is a new h2</h2>
    }
content.innerHTML='<h2> THIS IS A NEW H2</h2>;'