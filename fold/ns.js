//console.log(`hello world`)

//window.alert(`this is pizza`)

//this is a comment aka notes
/*this is also a comment*/

//document.getElementById("mybru").textContent='hello';

//let x; or you can just let x=100 effectively combininb declaration and assignment
//x=200;
//let firstname="bro;"
//let gmail="123gmail"
//let age=25;
//const birthday= 1; const is something you cannot change once assigned
//age= age*age; asterisk is multiplication

//age= age / x ts is division
//age= age ** 2  double asterisk is pangkat or to the power of x
//age= age + birthday;
//age= age % 2; shows leftovers of divisions
//let ageleft = age % 2
//age +=5; if you want to shorten it then use var ?= x;

//console.log(age);
//console.log(`my name is ${gmail} `)
//console.log(typeof firstname)
//let online= true;
//let fulln= "brocode";

//document.getElementById("p1").textContent= `your name is ${fulln}`;

//console.log(`bro is online: ${online}`);

//let username;
//username=window.prompt(" whats your username?") ts the easy way to accpt user input
//by default every user input is a string so you must change it into a number or boolean manually

let num1;
let num2;
let result;
document.getElementById("sub1").onclick = function () {
  num1 = document.getElementById("text1").value;
  num2 = document.getElementById("num2").value;
  num1 = Number(num1); //this is an example of a type conversion. this can be either boolean string etc
  num2 = Number(num2);
  if (document.getElementById("add").checked) {
    result = num1 + num2;
  } else if (document.getElementById("sub").checked) {
    result = num1 - num2;
  } else if (document.getElementById("divi").checked) {
    result = num1 / num2;
  } else if (document.getElementById("mult").checked) {
    result = num1 * num2;
  }

  document.getElementById("per").textContent = result;
};

//console.log(Math.PI);

//let x= 3;
//let y = 2;
//let z=1;
//z= Math.ceil(x);

// theres also round. to round the numbers and floor to
//  round down and for round up its ceil
// theeres also trunc whih is to shorten
//theres also pow whic is for to the power of like
//z= Math.pow(x, y);
//z= Math.sqrt(x); ts a square root
//z= Math.log(x); this is the opposite of an power
//z= Math.sin(x); this that sin and cos idek how to usen it alogn with tan
// z= Math.abs(x);  absolute value which means negative into positive
//z= Math.sign(x); idk dude
//let max= Math.max(x, y, z);
//let min= Math.min(x, y, z); minimum and max

//let time=16;
//let greeting= time < 12 ? "good morning" : "good afternoon";
//console.log(greeting); this is a ternary operator

//let useername=  "bomboclatt";
// this is the most important.
// it tells you if a string contains a ceertian charachter
// let res= useername.includes(" ");
// if(res){

//  console.log("name cannot have space innit");}
//else{console.log(username);}

//let phone= "123-456-7890";

// this replaces all specified charachters in the first
// () and repaces tthem with the second() phone= phone.replaceAll("-", " ");one
// this checks if theres enough charachters and if not it
// adds padding with the second number phone= phone.padStart(15, "0");
// theres also padend does the same thing but at the end
//console.log(phone);

// this will chose a letter of a variable based on the number console.log(useername.charAt(2));

// this will tell you whats the first appearnce of the letter you  placed in () in numbers console.log(useername.indexOf("m"));
// this wwill tell you whats the last appearance of the letter console.log(useername.lastIndexOf("o"));
// thiss tells you how long a string is console.log(useername.length);
// this will remove any emptu space or commonly known as white space useername = useername.trim();
// bv this will make the string all uppercaseuseername= useername.toUpperCase(); theres also a tolowercase
// pretty obvious useername= useername.repeat(3);
// this is a boolean that tels you if a string starts with a certian character theres also
//  endwith which, obviously tells you if a string end with a letterr
// this is really good if you pair it with an if statementlet res = useername.startsWith(" ");

//if(res){
//console.log("name cannot start with a space");}
//else{console.log(useername);}

//const fullname = "six seven ";
//let first=fullname.slice(0, fullname.indexOf(" "));
//let last=fullname.slice(fullname.indexOf(" ")+1) ex of slice
//console.log(first) ;
//console.log(last);
//  take anportion from another string to make a new one using the starting numbeer and ending numbeer
// const email="whatever11@gmail.com";
// let username= email.slice(0, email.indexOf("@")) ;
// let link= email.slice(email.indexOf("@") + 1);
//console.log(username);
//console.log(link);

//switch(day){
//case 1:
//    console.log("monday");
//   break;
// case 2:
//   console.log("tuesday");
//  break;
//  case 3:
//    console.log("wednesday");
//    break;
//    case 4:
//    console.log("thursday");
///    break;
//    case 5:
//    console.log("friday");
///   break;
//   case 6:
//  console.log("saturday");
// break;
//case 7:
//console.log("sunday");
//break;
/// default:console.log(`${day} aint a day, punk.`);
//}

//method chaining where you can combine methods after another in the same line of code

//let username= window.prompt("Enter yo user") ;
//username=username.trim().charAt(0).toUpperCase()+ username.slice(1).toLowerCase();

//console.log(username);

//LOGICAL OPERATOR
//const temp=20;

//and =&&
//or = ||
//not = !

// double & meansss both conditions have to be truth else
// double | means or one condtion or the other has to be true but youdd need it to be reversed
// like this if(temp <= 0 || temp > 30){console.log("weather is badd");}
//if(temp > 0 || temp <= 30){console.log("weather is good");}

//else{console.log("the weather is bad");}

//const sun=true;
//if (!sun){console.log("its cloudy");} this is an example of a not variablee if x is not met then xx qill be executed
//else{console.log("its sunny");}

//STRICT EQUALITY SIGNS
// = assignment operators
// ==comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
//!= inequality operator
// !== strict inequality operator

//const pi=3.14;
//if(pi=="3.14" ){console.log("thats pi");} ts comparison doesnt care about type only cares about value
//else{console.log("thats not pi");}

// const pi="3.14"; //but if we make it a string then it matches
//if(pi==="3.14" ){console.log("thats pi");} // the reason it says not pi is cuz
// we are comparing num to a string. THIS IS AN EXAMPLE OF A STRICT EQUALITY
//else{console.log("thats not pi");}

//const pi=3.15;
//if(pi != 3.14){console.log("thats not pi");} // inequality like if x isnt same to y then print b
// else print a
//else{console.log("thats pi")}

//const pi="3.14";
//if(pi !== "3.14"){console.log("thats not pi");} //ts a strict inequality operator
//else{console.log("thats pi")}

//WHILE LOOPS=do a code if x is active USE SAFE GUARDS OR IT WILL BREAK

//let username="";
//while(username==="" || username === null) THIS IS AN EXAMPLE OF WHILE LOOPS
//{username= window.prompt("enter your name");}
//console.log(`hello ${username}`);

//let username;
//do
//{username= window.prompt("enter your name");} //THIS IS A DO WHILE LOOP. DO THIS THEN CHECK IF THE WHILE IS STILL ACTIVE
//while(username==="" || username === null)
//console.log(`hello ${username}`);

//let login=false;
//let username;
//let password;

//do{username=window.prompt("username") ;
// password=window.prompt("password?");

//if(username=== "myusername" && password === "mypass"){
//login=true
//console.log('succsessfully logged in');}
//else{console.log("invalid login");}
//}while(!login)

//FOR LOOP
//the first i is where you wanna start the 2nd is where you wanna end the 3rd is just increments for normal counting use ++
//for(let i=0; i<=2; i++ ){console.log("hello");} // this is counting UP
//for(let i=10; i > 0; i--){console.log(i);} //this is counting down normally
//if you want it to count abnormally use i-=number

//for (let i = 1; i <= 20; i++) {
// if (i == 13) {
//   break; //this will make the code exit a loop if a certian condition is met
// continue; //this will skip
// } else {
//console.log(i);
//}
//}

//FUNCTION IS A SECTION OF RESUABLE CODE you can use it whenvever
//const username = window.prompt("Whats your name?");
//let age = window.prompt("How old are you?");

//function happybirthday(username, age) {
//console.log("happy birthday to  you");
//console.log("happy birthday to  you");
//console.log(`happy birthday to dear ${username}`);
//console.log("happy birthday to  you!");
//console.log(`You are now ${age} years old`);}

//happybirthday("matthew", 13); //THIS IS AN ARGUEMENT

//RETURN

//function add(x, y) {
//let res = x + y;
//return res; this is okay but
//return x + y; //this is better}
//function sub(x, y) {return x - y;}

//function mul(x, y) {return x * y;}
//function div(x, y) {
//return x / y;}

//function even(number) {
//if (number % 2 === 0) {
// return true;
//} else {
// return false;
//}
//}

//function email(email) {
//return email.includes("@") ? true : false ;}

//console.log(email("brubh@gmail.com"));
//console.log(even());
//let ans = mul(5, 2);
//console.log(ans);

//VARIABLE SCOPE

//function fun1() {
//let x = 1; //THIS IS LOCAL AND EXCLUSIVE TO THE FUNCTION
//console.log(x);}

//function fun2() {
//let x = 2;
//console.log(x);}

//fun2();

//ARRAY a variable like structure than can hold more than 1 value

//let fruit="gapple"; //normal var
//let fruits = ["gapple", "gcarrot", "notch apple", "abob"]; //ts an array always starts from 0

//fruits[0] = "coconut"; //ts changes a specific part of an array
//fruits.push("banana");// THIS ADDS SOMETHIN TO THE END OF AN AARAY
//fruits.pop(); //this removes the last of an array
//fruits.unshift("mango"); // this adds something to the bggining of an arrrrrrray
//fruits.shift("salad"); // this removes something from the begging of an arrrrrrrray

//let num = fruits.length; // well how long an aaray is
//let ind = fruits.indexOf("gcarrot"); // finds the position of a var in an array

// (let i = 0; i < fruits.length; i++) {
//console.log(fruits[i]);}
//these two are the same the bottom one is ismpler and much straightforward
//for (let fruit of fruits) {
//console.log(fruit);}

//fruits.sort(); //this sorts an array in alphabeticalorder
//fruits.sort().reverse(); // this sorts fruits in reverse order

//SPREAD OPERATOR basically unpacks variables like arrays and strings into seperate elements

//let num = [1, 2, 3, 4, 5];
//let max = Math.max(num); this will display nan because math can only be used o invidiual elements and arrays are the opposite of thst
//let max = Math.max(...num); // and to solve that simpply add 3 dots begore the array name and it will seperate it
//let min = Math.min(...num);
//console.log(min);

//let usr = "six seven";
//let letters = [...usr].join("."); // you can seperate charachters by using an array then using the spread oprator beforehand you can remove . join... . join is just to add something inbetween those letters
//console.log(letters);

//let fruits = ["apple", "banana", "coconut", "dewberry"];
//let veggies = ["carrot", "potatoe", "broccoli"];
//let foos = [...veggies, ...fruits]; // this combines arrays and you can also add new vars
//let cfruits = [...fruits]; // this is a shallow copy
//console.log(foos);

// REST PARAMETERS allow a function to work with a variable number of arguements by bundling them into an ARRAY
//spread =expannds an arry into seperate element
// //rest =  bundles seperate elements into an array

//const f1 = "pizza";
//const f2 = "hamburg";
//const f3 = "fries";
//const f4 = "chicken";

//function fridge(...foods) {
//example of rest
// console.log(...foods); // this makes it not an array}
//function getfood(...foods) {
//return foods;}

//const foods = getfood(f1, f2, f3, f4);
//console.log(foods);
//fridge(f1, f2, f3, f4); //example of rest

//function sum(...numbers) {
//let result = 0;
//  for (let number of numbers) {
//  result += number;}
//return result;}
//const total = sum(1, 2, 3, 4, 5);
//console.log(`your total is ${total}`);

//function gavg(...numbers) {
// let result = 0;
//for (let number of numbers) {
// result += number;}
//return result / numbers.length;}

//const total = gavg(75, 100, 85, 60, 70);
//console.log(total);
//function combineStrings(...strings) {
// return strings.join(" ");}
//const fname = combineStrings("Mr", "spongebob", "squarepant", "iii");
//console.log(fname)

//CALLBACK = a function that is passed as an arguement to another function
//like reading a file netwrok request or working with databases
// its  like sync
//hello(wait);
//function hello(callback) {
//  console.log("hello");
//  callback();
//}
//function wait() {
//console.log("wait");
//}

//function leave() {
//console.log("leave");
//}
//function goodbye() {
//console.log("goodbye");
//}
//sum(display, 1, 2);
//function sum(callback, x, y) {
//  let result = x + y;
// callback(result);
//}

//<FOREACH is a syntax where you assigna  function and an array and it will automatically apply that function to each part of the array. theres 3 things in order that is provided, element, index, and array
//function display(result) {
// console.log(result);
//}

//const bomboclatt = "six seven";
//bomboclatt.split("").forEach(display);
//function display(element, index, array) {
//  console.log(element, index + 1, array);
//}
//MAP syntax similar to foreach but returns a new array

//let idk = [1, 2, 3, 4, 5];
//const newarray = idk.map(square);
//console.log(newarray);

//function square(element) {
//return Math.pow(element, 2);
//}
//const charachters = "sandy spongebob squiddy patrick";
//const uppercase = charachters.split(" ").map(douppercase);
////console.log(uppercase);
//function douppercase(element) {
// return element.toUpperCase();
//}

//const databases = ["2023-8-10", "2024-5-8", "2025-6-9"];
///console.log(databases.map(formatdates));

//function formatdates(element) {
// const parts = element.split("-");
//return `${parts[1]}/${parts[2]}/${parts[0]}`;
//}
//.FILTER creates a new array by filtering out certain elements
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let filterednumbers = numbers.filter(iseven);
//console.log(filterednumbers);

//function iseven(element) {
//  return element % 2 !== 0;
//}
//const ages = [16, 17, 18, 18, 60];
//console.log(ages.filter(isadult));
//console.log(ages.filter(ischild));
//function isadult(element) {
//return element >= 18;
//}
//function ischild(element) {
// return element < 18;
//}

//unrelated funciotn

//const students = [
//  { name: "Alice", grade: 82 },  { name: "Bob", grade: 45 },
//  { name: "Carlos", grade: 91 },
//  { name: "Diana", grade: 50 },
//  { name: "Eve", grade: 38 },
//  { name: "Frank", grade: 76 },
//];
//let sorted;
//let finalarr = [];
//function sort() {
//  let sortarr = [];
//  for (let i = 0; i < students.length; i++) {
//    let current = students[i].grade;
//    let nextnum = 0;
//    let leftarr;
//    let rightarr;
//    if (i > 0) {
//      while (nextnum < sortarr.length && current < sortarr[nextnum].grade) {
//        nextnum++;
//      }
//     leftarr = sortarr.slice(0, nextnum);
//      rightarr = sortarr.slice(nextnum);
//      sortarr = [...leftarr, students[i], ...rightarr];
//    } else {
//      sortarr = [students[0]]
//    }
//  }
//  finalarr = sortarr.map((element) => element.name);
//  console.log(finalarr);
//}
//sort();

//REDUCE reduce elements of an array to a single value
//const prices = [12, 15, 120, 190, 40];
//const total = prices.reduce(sum);
//console.log(`$${total.toFixed(2)}`);
//function sum(previous, next) {
//  return previous + next;
//}
//
//const grades = [10, 75, 50, 90, 80, 65, 95];
//const maximum = grades.reduce(getMax);
//const minimum = grades.reduce(getMin);
//console.log(maximum, minimum);
//
//function getMax(previous, next) {
//  return Math.max(previous, next);
//}
//function getMin(previous, next) {
//  return Math.min(previous, next);
//}//

//const sentence =
//  "Hello my name name is definetly not matthew or george the third the humongous i am";
//const longword = sentence.split(" ").reduce(longsearch);
//console.log(longword);
//
//function longsearch(prev, next) {
//  let l1 = prev.length;
//  let l2 = next.length;
//
//  return l1 > l2 ? prev : next;
//}
//
////FUNCTION EXPRESSIONS a way to store or define functions as values or varibels
//.const hello = function () {
//  console.log("hello world");
//};
//hello();
//setTimeout(function () {
//  console.log("hello world");
//}, 3000);

//const numero = [
//  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//];
//const squaro = numero.map(function (element) {
//  return element ** 2;
//});
//const cubo = numero.map(function (element) {
//  return element ** 3;
//});
//console.log(squaro, cubo);
//const evennums = numero.filter(function (element) {
//  return element % 2 === 0;
//});
//const oddnums = numero.filter(function (element) {
//  return element % 2 !== 0;
//});
//console.log(evennums, oddnums);
//ARROW FUNCTIONS
const harlo = (name, age) => {
  (console.log(`hello my name is ${name}`),
    console.log(`i am ${age} years old`));
};
harlo("matthew", "14");
setTimeout(() => {
  console.log("hello");
}, 3000);
