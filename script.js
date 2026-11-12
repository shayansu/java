
// TASK 01 – Personal Introduction

var name = prompt("Enter your name");
var age = prompt("Enter your age");
var city = prompt("Enter your city");

alert("My name is " + name +
"\nI am " + age + " years old." +
"\nI live in " + city);


// TASK 02 – Age Calculator

var birthYear = prompt("Enter your birth year");

var currentYear = 2026;
var age = currentYear - Number(birthYear);

alert("Your birth year is " + birthYear +
"\nYour age is " + age);


// TASK 03 – Addition Calculator

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

var total = Number(num1) + Number(num2);

alert("First Number: " + num1 +
"\nSecond Number: " + num2 +
"\nTotal: " + total);


// TASK 04 – Shopping Bill

var product = prompt("Enter product name");
var price = prompt("Enter product price");
var quantity = prompt("Enter quantity");

var totalBill = Number(price) * Number(quantity);

alert("Product: " + product +
"\nPrice: " + price +
"\nQuantity: " + quantity +
"\nTotal Bill: " + totalBill);


// TASK 05 – Student Marks

var studentName = prompt("Enter student name");
var english = prompt("Enter English marks");
var math = prompt("Enter Math marks");
var computer = prompt("Enter Computer marks");

var totalMarks = Number(english) + Number(math) + Number(computer);

alert("Student Name: " + studentName +
"\nEnglish: " + english +
"\nMath: " + math +
"\nComputer: " + computer +
"\nTotal Marks: " + totalMarks);


// TASK 06 – Simple Restaurant Bill

var restaurant = prompt("Enter restaurant name");
var burger = prompt("Enter burger price");
var pizza = prompt("Enter pizza price");

var total = Number(burger) + Number(pizza);

alert("Restaurant: " + restaurant +
"\nBurger: " + burger +
"\nPizza: " + pizza +
"\nTotal Bill: " + total);


// TASK 07 – Full Name Generator

var firstName = prompt("Enter first name");
var middleName = prompt("Enter middle name");
var lastName = prompt("Enter last name");

var fullName = firstName + " " + middleName + " " + lastName;

alert("First Name: " + firstName +
"\nMiddle Name: " + middleName +
"\nLast Name: " + lastName +
"\nFull Name: " + fullName);


// TASK 08 – Marks Percentage

var subject1 = prompt("Enter subject 1 marks");
var subject2 = prompt("Enter subject 2 marks");
var subject3 = prompt("Enter subject 3 marks");
var subject4 = prompt("Enter subject 4 marks");
var subject5 = prompt("Enter subject 5 marks");

var totalMarks = Number(subject1) + Number(subject2) +
Number(subject3) + Number(subject4) + Number(subject5);

var percentage = (totalMarks / 500) * 100;

alert("Total Marks: " + totalMarks + " / 500" +
"\nPercentage: " + percentage + "%");
