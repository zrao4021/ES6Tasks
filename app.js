// 1
// var dec = "university";
// let lets = "karachi";
// const count = "constant";

// function decla(){
//     console.log(dec)
//     console.log(lets)
//     console.log(count)
// }
// decla()

// they are accessible globally.

// 2

// function greet(){
//     var varia = "globally accessible";
//     let start = "website";
//     const first = "app developmant";
// };

// greet()

// console.log(varia);
// console.log(start);
// console.log(first);

// the var variable is accessible outside the function but its value is undefined.
// and let and const can not be access outside the function.

// 3

// if(true){
//     var third = 1234;
//     let fourth = "counting";
//     const fifth = "karachi"
// }else{
//     console.log("sorry")
// }
// console.log(third);
// console.log(fourth);
// console.log(fifth);

// i observe that var variable can be access but const and let can not be access outside the function

// 4

// console.log(sixth);
// var sixth = 'web development';
// i get the value undefined.

// 5

// console.log(name);
// let name = "rao";

// erroe occur Cannot access 'name' before initialization,

// console.log(access);
// const access = "rao";

// erroe occur Cannot access 'access' before initialization,

// 6

// var y = 10;

// var y = 20;

// console.log(y);

// let g = 10;

// let g = 20;

// console.log(g);

// const g = 10;

// const g = 20;

// console.log(g);

// i observe that var variable can be acces by declare it by the same name and the value print will be second and  let and const can not be access by the same name.

// 7

// var name = "chikki";
//  name = "vikki";
//  console.log(name);

// let name = "chikki";
//  name = "vikki";
//  console.log(name);

// const name = "chikki";
//  name = "vikki";
//  console.log(name);

// in var and let variable's case the reassign value is printed.but in const variable we can't reassign a value using const.

// 8

// {
//     console.log(second);
//     let second = 1346;
// //  can not access second before initialization.because we can not log let variable in block before its declaration.
// }

// {
//     console.log(second);
//     const second = 1346;
//  can not access second before initialization.because we can not log const variable in block before its declaration.
// }

// 9  skip for a while

// Good use case for var:


// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }


// In this example, var is used to declare the loop counter i. Because var is function-scoped, the value of i is shared across all iterations of the loop. This can be useful in certain situations, such as when you need to access the loop counter outside the loop.

// Good use case for let:


// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }


// In this example, let is used to declare the loop counter i. Because let is block-scoped, each iteration of the loop gets its own copy of i. This means that the value of i logged to the console will be the value of i at the time the timeout function was scheduled, rather than the final value of i after the loop completes.

// Good use case for const:


// const PI = 3.14159;
// const GRAVITY = 9.81;

// function calculateArea(radius) {
//   return PI * radius * radius;
// }

// function calculateForce(mass, acceleration) {
//   return mass * GRAVITY * acceleration;
// }


// In this example, const is used to declare two constants, PI and GRAVITY. Because const variables cannot be reassigned, we can be confident that these values will not change throughout our program. This makes our code more predictable and easier to reason about.

// 10

// var firstName = "ALI"
// var lastName = "Ahmed"
// console.log(`${firstName}${lastName}`)

// 11

// let name = "REHMAT ALI";
// let age = 24;
// let adress = "liaquatabad";
// console.log(`hello my name is ${name} and my age is ${age} and area where i live is ${adress}...`);

// 12

// let num1 = 10;
// let num2 = 20;
// console.log(`the sum of 10 and 20 is ${num1 + num2}`);

// 13
// function ret(y,z){
//   return y*z
// }
// const call = `the product of 5 and 6 is ${ret(5,6)} `
// console.log(call)

// 14
// function logTag(strings,...values){
//   const result = 
//   string.reduce((acc,string,index)=>{
//   return acc+string+(values[index] || '')
//   },'');
//   console.log(result);
  
// }
// const ann = `i sould have to ${'loyal'} to our ${'country'}`;
// console.log(ann);

// 15 not right

// function uppercase(string,...values){
//   const result = string.reduce((acc,string,index)=>{
//     return acc + string + (values[index]?values[index].toUppercase() : '');

//   }, '')
//   return result

// }
// const format = uppercase`hello ${'world'} i m a ${'motivational speaker'}`
// console.log(format)

// 16

// const currentH = new Date;
//  get = currentH.getHours;

// let message;

// if(get < 12){
//     message = `its morning`
// }else{
//     message = `its afternoon`

// }
// console.log(message);

// 17 not yet solved

// let arr = [apple,banana,orange,graps,mango,sugercane];
// let get = document.getElementById("0ne")
//  get.innerHTML =  `  ${arr.map(arr => `<li>${arr}</li>`).join('')}
//           `
//           console.log(get);

// 18

// Create a string with a backtick character using a template literal
// const myString = `This is a backtick: \` in the string.`;

// Log the string to the console
// console.log(myString);

// 19

// Define a 2D array to represent the table's rows and cells
// const tableData = [
//     ['Name', 'Age', 'Country'],
//     ['John Doe', '30', 'USA'],
//     ['Jane Smith', '25', 'UK'],
//     ['Sam Green', '28', 'Canada']
    

//   ];

// tableData.push(['David Grey', '32', 'Germany']);
// tableData.push(['mark gen', '42', 'china']);

  
//   // Build a string that shows only the content of the table without the HTML elements
  // const tableText = `
  //   Header: ${tableData[0].join(', ')}
  //   ${tableData.slice(1).map(row => row.join(', ')).join('\n')}
  // `;
  
  // Log the resulting table content (values only, no HTML tags)
  // console.log(tableText);
  
// 20


// const age = 17;

// const canVote = age < 20 ? 'YES' :'NO' 
// console.log(canVote);

// 21

// let number = 8;

// let condition = number % 2 === 0 ? 'even' : 'odd';

// console.log(condition);

// 22


// const score = 85;  

// const grade = score >= 90 ? "A" :
//              score >= 80 ? "B" :
//              score >= 70 ? "C" :
//              score >= 60 ? "D" :
//              "F";

// // Log the grade to the console
// console.log(grade);

// 23.

// let isLoggedIn = true;

// let statusMessage = isLoggedIn ? "Welcome back!" : "please log in";

// console.log(statusMessage);

// 24

// let isMember = true;

// let purchaseamount = 200;

// let discount = purchaseamount > 100 ? 200 * 10 / 100 : 0;

// console.log(discount);

// 25

// function MaxValue(a,b){
//   return a > b ? a : b;
// }
// let result = MaxValue(20,30);
// console.log(result);

// 26

// function greet(name){
//     return name  ? `hello ${name}`  : `hello guest`; 
// }

// let res = greet("friend");

// console.log(res);

// 27
// let array_numbers = [2,6,5,7];

// let getresult = array_numbers.map(num => num % 2 === 0 ? num*2 : num*3);

// console.log(getresult);

// 28

// let names = ["Rani","car", "yellow" ,"cat" ,"bat" ,"Raza"];

// let finalans = names.filter( nam => nam.length > 3 ? true : false);

// console.log(finalans);

// 29

// let originalarray = [true,"hello world","J.","birds"];

// let copiedarray = [...originalarray];

// console.log(originalarray);
// console.log(copiedarray);

// spread operater is ... it used to copy an array the same as it was.

// 30

// let array1 = [true,"hello world","J.","birds"];

// let array2 = [2,6,5,true,null];

// let MergedArray = [...array1,...array2];

// console.log(MergedArray);

// 31

// let arr = [true,false,"univversity","karachi","world"];

// let puts = [88,66, ...arr, 77, 66];

// console.log(puts);
 
// thats how we can put elements at the beggining and at the end of an array.

// 32

// let original_ibject = {
//   name : "Raza",
//   education : "MBBs",
//   id : 333,
// };
// let copies_object = {...original_ibject};

// console.log(original_ibject);
// console.log(copies_object);

// 33

// let object1 = {
//   name : "Razi",
//   education : "Engineer",
//   id : 1124,
// };
// let object2 = {
//    naam : "Rajab",
//   passion : "piolet",
//   identity : 7745,
// }

// let murge_object = {...object1,...object2,};

// console.log(murge_object);

// when we murge objects  if the keys are same then keys will overlap ,

// 34

// let user = {
//   name : "salar",
//   age : 30,
//   email  : "salar123",
// }
// let updateduser = {
//   ...user,
//   email : "salar456",
//   adress : "nazimabad karachi"
// }
// console.log(updateduser);

// 35

// function sum(a,b,c){
//   return a + b + c;
// }
// let arrayss = [2,4,6];
// let pass = sum(...arrayss);
// console.log(pass);

// 36

// function combinedarrays(...combination){
//   return [...combination.flat()];
// }
//  let array1 = [1,2,3,4];
//  let array2 = [5,6,7,8];
//  let array3 = [9,10,11,12];

//  let combination = combinedarrays(array1,array2,array3);
//  console.log(combination);

// 37

// function multiply(num,...arg){

//    return arg.map(arg => num * arg );
// }
// let result = multiply(2,3,4,5);

// console.log(result);

// 38
  // first we crete nested array

// let nestedarray = [[1,2],[3,4],[5,6],[7,8]];

// then we copy this nestesd array like this not a rocket science.

// let copy = [...nestedarray];

// then we change some elements of inner array;

// copy[0][0]=20;

// copy[1][1]=30;

// console.log(copy);

// console.log(nestedarray);

// i observed that in boths consoles the impact of modify does'nt affect  only copied array but it also affect nested  array original because both of the arrays means nested array and copied array have the references.

// 39

// function sum(...plus){
//   return plus.reduce((a,b) => a + b,0);
// }
// let answer = sum(2,3,4,5);

// console.log(answer);

// 40

// function average(...avg){
//    return avg.reduce((a,b) => a + b / 3,0);

// }
// let finalresult = average(2,4,6);

// console.log(finalresult);


// 41

// let arrayyy = [2,4,6,8,10];

// destructuring of array.

// let [first, ...rest] = arrayyy;

// console.log(first);

// console.log(rest);

// 42

// let colors = ['zohra','karachi','university','elements','skip'];

// let [fisty,second,...rest] = colors;

// let remainingColors = [...rest];

// console.log(remainingColors);

// in rest elements not all element prints here only rested elemens will be printed;

// 43 

// let person = {
//   name : "john",
//   age : 44,
//   email : "john1234@gmail.com",
//   adress : "landon"
// };
// let {name,age, ...rest} = person;


// console.log(name);

// console.log(age);

// console.log(rest);

// thats how we can destructurize an object by using its key names not by fisrt and second like destructuring of array.

// 44

// let student = {
//   id  : 456,
//   name : "jack",
//   grades : "A",
//   info : {
//     age : 25,
//     major : "economics"
//   }
// }
// let {
//   id,
//   name,
//   info : {major},
//   ...rest
// } = student
// console.log(id);
// console.log(name);
// console.log(major);
// console.log(rest);


// 45

// function filtereven(...arg){

//   return arg.filter(num => num % 2 === 0)
// }

// let result = filtereven(2,5,8,3);

// console.log(result);

// we use filter method here. reduce does not work. !!

// 46

// function combinearray(...argu){

//   return argu.flat().sort((a,b) => a - b)

// };
// let get = combinearray([3,4,5,6],[7,8,9,10],[11,12,13,14,15]);
// console.log(get);

// we use flat because we want a single array and sort to print in an order form and a - b means that if a is greater then b then print first a and viseversa.

// 47

// let fruits = ["apple","banana","cherry"];

// let [firstfruit,secondfruit,thirdfruit] = fruits;

// console.log(firstfruit);
// console.log(secondfruit);
// console.log(thirdfruit);

// 48

// let arrays_color = ["red","green","blue","yellow"];

// let[primarycolor, secondaryelement, tertiarycolor] = arrays_color;

// console.log(primarycolor);
// console.log(tertiarycolor);

// 49

// let arraynum = [1,2,3,4,5];

// let [firstNumber, ...remainingNumbers] = arraynum;

// console.log(firstNumber);

// console.log(remainingNumbers);

// 50

// let person = {
//   name : "jack",
//   age : 26,
//   city : "USA"
// }
// let{
//   name,
//   age,
//   city,
// }= person;
// console.log( `name is `,name);
// console.log( `age is`,age);
// console.log(`city is`,city);

// 51

// let car = {
//   make : "Toyota",
//   model : "Camry",
//   year : 2022,
// };
// let {
//   make : carmake,
//   model : carmodel,
//   year : caryear,
// }= car;

// console.log( `car name is`,carmake);
// console.log(`car model is`,carmodel);
// console.log(`car year is`,caryear);

// 52

// let settings = {
//   theme : "yellow",
  // language : "hindi",
// }
// let{
//   theme,
//   language = "english",
// }=settings;

// console.log(theme);
// console.log(language);

// the language is already defined in the settings objects so the default value will not work in this case.
// if in the settings object language is not defined then in the destructuring we can add property of language like language = "english",then console it will work.

// 53

// we are going to destructuring of sub-array.in the nested-array.

// let nestedarray = [[1,2],[3,4],[5,6]];

// now we destructure this nested array.

// let [
//   [a],
//   [b],
//   [c],
// ] = nestedarray;

// console.log( "A",a);
// console.log ( "B",b);
// console.log("C",c);

// so thats how we can extract the sub array's first elememnt. if we destruc... like let{ [a,b],[c,d],[e,f]} so all elements print to the console but the task is only extract first element of sub array.

// 54

// let profile = {
//   username : "zarlish",
//   detailes : {
//     email : "zarlish345@gmail.com",
//     address : "abc street pakistan",
//   }
// }
// let {
//   username,
//   detailes : {email,address}
// }= profile;
// console.log(username);
// console.log(email);
// console.log(address);

// 55

// let data = {
//    id : 457,
//    info : [
//     {
//       name : "alice",
//       age : 25,
//     }
//    ]
// }
// let {
//   id,
//   info : [
//     {
//       name,
//       age,
//     }
//   ]
// }= data;
// console.log(id);
// console.log(name);
// console.log(age);

// in this question we have to destructure an object in which there is an array too so therefore we destucture an object like this,

// 56

// function printCoordinates([x,y]){
//   console.log(`${x},${y}`);
  
// }
// printCoordinates([60,70]);
// printCoordinates([100,200]);
// printCoordinates([300,400]);

// thats how we can destructure a function who receives an array as a parameter we simply console x and y and send value of x and y from argument,

// 57

// function displayUser({name,age}){
//   console.log(` the name of user is  ${name}, And age of user is ${age}`);
  
// };
// displayUser({name : "john",age: 25,})
// displayUser({name : "Roy",age: 30,})
// displayUser({name : "Harry",age: 40,})
// displayUser({name : "Elice",age: 30,})


// 58

// let book = {
//   title : "MacroEconomics",
//   author : "Elisa gray",
//   year : 2000,
// }
// console.log(Object.keys(book));

// 59

// let student =  {
//   name : "john",
//   age : 33,
//   grade : "B",
//   school : "high school",
// }
// let namesprop = Object.keys(student);

// let numberprop = namesprop.length;

// console.log(namesprop);
// console.log(numberprop);

// 60

// let product = {
//   name : "appleJuice",
//   price : 120,
//   category : "Health"
// };
// let keys = Object.keys(product);

// for(let value of keys){
//         console.log(`${value},${product[value]}`);
        
// }

// we take  out keys of object first if we console just keys then keys will be in array and we want to keys and their value not be in array so we extrect keys by object.keys(),and then apply for of loop in for of loop the for(let values in keys) = in it if we log values then we can see that it is keys which are not in an array because of applying for of loop so  we got keys of array so now want to acces their values so ${product[value]} means in the object named product get out their values now  acces value in this way we can access individual values of keys. 









