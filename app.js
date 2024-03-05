
// CHAPTER 9

// USER INPUT AND CONDITIONAL STATEMENT



// 1.


// var city = prompt ("enter tne name of the city");
// if ( city == "karachi"){
//     document.write("welcome to city of lights");
// }
// else {
//     document.write(false);
// }





// 2.



// var gender = prompt ("enter your gender");

// if (gender =="male"){
//     document.write("GOOD MORNING SIR");
// }
// else if (gender =="female"){
//     document.write("GOOD MORNING Ma am");
// }
// else{
//     document.write(false);
// }


.3

// var signal = prompt("Traffic LIght");

// if (signal == "red") {
//     document.write("Must Stop");
// } else if (signal === "yellow") {
//     document.write("Ready to Move");
// } else {
//     document.write("Move now")
// }


// 4.

// var fuel = +prompt( "How much fuel do you have?");

//  if ( fuel <0.25){
//     document.write("Please refill fuel in your car");
// }

// else if  ( fuel >0.25){
//     document.write (" It s full Thank you");
// }
//     else {
//         document.write(false);
//     }



// .5


// var  a = 4;
// if (++a===5){
//     alert(false);
// }







// var b = 82;
// if (b++===83){
//     alert(false);
// }


// var c = 12;
// if (c++===13){
//     alert("condition 1 is true");
// }


// if (c ===13){
//     alert("condition 2 is true");
// }

// if (++c<14){
//     alert("condition 3 is true");
// }

// if(c===14){
//     alert("condition 4 is true");
// }



// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The Cost equals");
// }

// console.log("1")
// if (true){
//     console.log("2")
//     alert("True");
// }
// if (false){
//     console.log("3")
//     alert("False");
// }

// for(var a = 0; a = 10; a++) {
//     console.log(a)
// }





// if("car"< "cat"){
//     alert("car is smaller than a cat");
// }


// 6.

// var english = 55;
// var urdu    = 65;
// var math    = 85;

// var total = english + urdu + math;
// var perc =  total /300 *100
// console.log(perc)


// var engGrade = +prompt("Enter your english grade");
// var urduGrade = +prompt("Enter your Urdu grade");
// var mathGrade = +prompt("Enter your Math grade");
// var total = 300;

// var obtain = engGrade + urduGrade + mathGrade;
// var pers = obtain / total * 100;
// var grade;
// var remark;

// if (pers >= 80){
//     grade = "A-one"
//     remark = "Exellent"
// } else if (pers >= 70) {
//     grade = "A"
//     remark = "Good"
// } else if (pers >= 60) {
//     grade = "B"
//     remark = "Need Improvment"
// } else {
//     grade = "Fail"
//     remark = "Call your parents"
// }
// document.write("Total Marks:" + total + "<br>Obtain marks:" + obtain + "<br>Percentage:" + pers + "<br>Grade:" + grade + "<br>Remarks:" + remark);

// 7.



// var secret = 9;
// var guess = +prompt("guess any num");

// if (guess ==9){
//     alert("bingo");
// }

// else{ (guess >=10)
//       alert("close enough to the correct answer");
// }


// 10.


// var tem = +prompt( "Enter temperature in Fahrenheit: ");

// if(tem >= 40){
//     document.write("Its too hot outside");
// }
// else if (tem >= 30  && tem < 40 ){
//    document.write("The weather is normal today");
// }
// else if (tem >= 20 && tem < 30 ){
//     document.write("Today the weather is cool");
// }
// else  {(tem >= 10  && tem < 20 )
//     document.write("OMG! today the weather is so cool");
// }


// 11.


// var number1 = +prompt ("enter  first number");
// var number2 = +prompt ("enter second number");
// var operator = prompt("Enter operator");
// var result;

// if (operator == "+"){
//     result = number1+number2;
// }

// else if (operator == "-"){
//    result = number1-number2;
// }
// else if (operator == "*"){
//    result = number1*number2;
// }
// else if (operator == "/"){
//    result = number1/number2;
// }
// else {
//    result = 100%5;
// }
// document.write( result)


// chapter no 12   13


// 1.


// var input = prompt("please enter your value")
// var str = input.charCodeAt(0);
  
//     if (str >= 48 && str <= 57) {
//         console.log("number.");
//     }
//     else if (str >= 65 && str <= 90) {
//         console.log("uppercase letter");
//     }
//     else if (str >= 97 && str <= 122) {
//         console.log("lowercase letter");
//     }
//     else {
//         console.log("not a number, uppercase letter, or lowercase letter.");
//     }


// 2.
 
// var num1 = prompt("Please enter the first integer:");
// var num2 = prompt("Please enter the second integer:");

// if (num1 > num2) {
//     document.write("The larger number is: " + num1);
// } else if (num1 < num2) {
//     document.write("The larger number is: " + num2);
// } else {
//     document.write("The two integers are equal.");
// }

// 3.

// var num = prompt("Please enter the second integer:");

// if (num > 0) {
//     document.write("Positive");
// } else if (num < 0) {
//     document.write("Negative");
// } else {
//     document.write("Zero");
// }


// 4.

// var Vowel = function(letter)



// { var  vowels = ["a", "e", "i", "o", "u"];
    
//     for(var i in vowels){
    
//         if(letter === i){
//             return true;
//         } else {
//             return false;
//         }
//     }
    
    
// }
//     findVowel("e");




// 5.



// var correctPassword = "mySecretPassword";


// var userInput = prompt("Enter your password:");


// if (!userInput) {
   
//     alert("Please enter your password");
// } else if (userInput === correctPassword) {
   
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");}




// 6.



// var greeting;

// var hour = 19;

// if ( hour <= 18){
//     document.write("good day");
// }

// else {
//      document.write("GOOD evening")
//     }


// 7.


// var time = +prompt("enter time");


// if (time >= 0 && time < 1200 ){

//     document.write("good morning");

// } else if (time >= 1200 && time <1700){
//     document.write("good afternoon");
// } else if (time>= 1700 && time<2100){
//     document.write("good evening");
// } else if (time>= 2100 && time <=2359){
//     document.write("good night");
// }else  {
//     document.write("please provise time between 0000 and 2359");
// }
 

// CHAPTER 10

// (IF STATEMENT)


// 1.

// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City OF Lights");
// }


// 2.


// if (x === y) {
//     var z = prompt("Please enter the value of z:");
  
// }


// 3.


// var zipCode = "10010";

// if (zipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }



// 4.


// var x = 1;


// if (x === 1) {
//     x = 2; 
// }

// console.log(x);



// CHAPTER 11

// (comparison operator)


// 1.

// var variable1 = "a";
// var variable2 ="b";

// if (variable1 !== variable2) {
   
   
// }



// 2.

// var variable1 = 1;
// var variable2 = 2;

// if (variable1 >= variable2) {
//     console.log("no")
// }



// 3.


// var myVariable = 5; 

// if (myVariable !== 10) {
//     myVariable = 10; 
// }

// console.log(myVariable); 

// 4.

// var number1 = 10;
// var number2 = 5;

// if (number1 !== number2) {
//     alert("Congratulations! The numbers are unequal.");
// }



// 5.




// var firstName = prompt("Please enter your first name:");

// var anotherName = "John"; 

// if (firstName !== anotherName) {
//     alert("No match");
// }

// CHAPTER 12

// (if else and eklse if statement)

// 1.



// var variable1 = 10;
// var variable2 = 5;

// if (variable1 >= variable2) {
//     alert("Variable 1 is greater than or equal to Variable 2.");
// } else {
//     alert("Variable 1 is less than Variable 2.");
// }

// 2.



// var marks = parseFloat(prompt("Enter your marks:"));


// var percentage = (marks / 100) * 100;


// var grade;


// if (percentage >= 90) {
//     grade = 'A';
// } else if (percentage >= 80) {
//     grade = 'B';
// } else if (percentage >= 70) {
//     grade = 'C';
// } else if (percentage >= 60) {
//     grade = 'D';
// } else if (percentage >= 50) {
//     grade = 'E';
// } else {
//     grade = 'F';
// }


// alert("Your percentage: " + percentage.toFixed(2) + "%\nYour grade: " + grade);



// 3.
// var a = 5; 

// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }


// 4.

// var city = prompt("Enter a city:");

// if (city.toLowerCase() === "karachi") {
//     alert("Yes, it is Karachi.");
// } else if (city.toLowerCase() === "lahore") {
//     alert("Yes, it is Lahore.");
// } else {
//     alert("It is neither Karachi nor Lahore.");
// }



// CHAPTER 13  

// (testing sets of conditions)


// 1.

// if (a === b && c === d) {
    
// }



// 2.

// if (a === b || c !== d) {
   
// }


// 3.

// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
 
// }




// 4.


// var num1 = 10;
// var num2 = 20;


// if (num1 < num2 || num1 > num2) {
//     alert("The condition is true: the first variable is either less than or greater than the second variable.");
// }


// // 5.


// var firstName = "John";
// var lastName = "Doe";


// var enteredFirstName = prompt("Please enter your first name:");
// var enteredLastName = prompt("Please enter your last name:");


// if (enteredFirstName === firstName && enteredLastName === lastName) {
//     alert("The entered names match the variables.");
// }



// CHAPTER 14

// (if statement nested)

// 1.


// var password = prompt("Please enter your password:");

// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5");
//     } else {
//         alert("OK");
//     }
// }


// 2.

// var a = 1;
// var c = "Max";


// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }


// 3.


// if (a === 1 && c === "Max") {
//     alert("OK");
// }



// 4.



// var num1 = 5;
// var num2 = 5;


// if (num1 === num2) {
//     if (num1 <= num2) {
//         alert("The first variable equals the second variable and is less than or equal to it.");
//     }
// }
