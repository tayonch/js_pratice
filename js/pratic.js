// 1. Create a variable named name and store your name in it. Print the value using console.log().
let name = "Tayon Chakma";
console.log("My Name is : ", name);
// 2. Create a variable named age and store your age in it. Print the value.
let age = 23;
console.log("My Age is : :", age);
// 3. Create two variables named city and country. Store your city and country names and print both values.
let city = `kazipara, mirpur 
dhaka`;
let country = "Bangladesh";
let count = `1216, ${country}`;
console.log("My Address  is : ", city, count);

// 4. Create a variable using let with an initial value of 10. Change its value to 20 and print it.

let numberOne = 10;
numberOne = 20;
console.log("Number change is : ", numberOne);

//  5. Create a constant named PI and assign the value 3.1416 to it.
const pi = 3.1416;
console.log("pi constant value is :", pi);

// 6. Create two variables named firstName and lastName. Combine them to create and print your full name.

let firstName = "Tayon";
let lastName = "Chakma";
let fullName = firstName + " " + lastName;
console.log("My Full Name is : ", fullName);

// 7. Create a variable named price with a value of 500. Increase its value by 100 and print the result.

let price = 500;
price += 100;
console.log("Incressing price ", price);

// 8. Create two variables, a = 10 and b = 20. Swap their values.
let a = 10;
let b = 20;
let c = b = a;
console.log("Swap the Value : ", c);

//  9. Create three variables named productName, productPrice, and quantity. Assign values and print them.

let productName = "T shirt";
let productPrice = 200;
let productQuantity = "1kg";
console.log("product  name ;", productName);
console.log("product price : ", productPrice);
console.log("product quantity :", productQuantity);

// 10. Create a variable using let with an initial value of 50. Update its value to 100 and print it.
let initialvalue = 50;
initialvalue = 100;
console.log("initial updated value is :", initialvalue);


console.log("------------dATA TYPES PART START-----------");

// 11. Create a String variable and use typeof to check its data type.
let Stringg = "Tayon chakma";
console.log(typeof Stringg);

// 12. Create a Number variable and check its data type using typeof.
let phoneNumber = +881266;
console.log(typeof phoneNumber);
// 13. Create a Boolean variable with the value true. Check its data type.
let man = true;
console.log(typeof man);

// 14. Create a variable with the value null. Check its data type.
let kali = null;
console.log(typeof kali);

// 15. Create a variable without assigning any value. Check its data type.
let notting;
console.log(typeof notting);
// 16. Create an Array containing five numbers. Check its data type using typeof.
let arryNumber = [10, 20, 30, 60, 70];
console.log(typeof arryNumber);

// 17. Create an Object containing the following properties:name age  city;

let person = {
    name: "Tayon Chakma ",
    age: 23,
    city: "Dhaka"
};
console.log(person);

/*
18. Check the data types of the following values using typeof:
"JavaScript"
100
true
undefined
null
*/
let javaS = "javaScript";
let num = 100;
let sotik = true;
let not = undefined;
let faka = null;
console.log(typeof javaS);
console.log(typeof num);
console.log(typeof sotik);
console.log(typeof not);
console.log(typeof faka);


// 19. Create one String variable with the value "100" and one Number variable with the value 100. Compare their data types.
let numbberOne = "100"
let numberTwo = 100;
console.log(numberOne === numberTwo);

// 20. Create a variable and initially assign a String value. Then change it to a Number value. Check its data type after each assignment.
let myName = "Tayon";
let myNum = 203;
console.log(myName, typeof myName);
console.log(myNum, typeof myNum);


console.log("------Operators - -------");


/* 21. Create two variables with values 20 and 10. Perform the following operations:
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
*/
let d = 20;
let e = 10;
console.log(d + e);
console.log(d - e);
console.log(d * e);
console.log(d / e);

// 22. Create two variables with values 25 and 4. Use the Modulus (%) operator to find the remainder.
let f = 25;
let g = 4;
console.log(f % g);

/*
23. Create two variables, a = 10 and b = 5. Perform the following comparisons:
a > b
a < b
a === b
a !== b
*/
let j = 10;
let k = 5;
if (j > k) {
    console.log("j is big");
} else {
    console.log("k is big ");
}



if (j < k) {
    console.log("j is big");
} else {
    console.log("k is big ");
}



if (j === k) {
    console.log("True");
} else {
    console.log("sotik noi ");
}



if (j !== k) {
    console.log("True");
} else {
    console.log("false");
}

// 24. Create a variable named age with a value of 20. Check whether the age is greater than 18.
let ageOne = 20;
if (18 < 20) {
    console.log(" 20 number big ");
} else {
    console.log("20 number small");
}

// 25. Create two variables, a = 15 and b = 10. Use the Logical AND (&&) and Logical OR (||) operators to test different conditions.
let t = 15;
let y = 10;
if (t > y && y <= t) {
    console.log("T is a big number");
} else {
    console.log("Y is a big number ");
}


//  or operator      ;
if (y < t || t < y) {
    console.log("t is a small number ")
} else {
    console.log("y is a small number")
}

//  26. Create a variable named number with a value of 7. Use the Increment (++) operator to increase its value by 1.
let numberThree = 7;
numberThree++;
console.log("increment 1  is :", numberThree);

// 27. Create a variable named number with a value of 10. Use the Decrement (--) operator to decrease its value by 1.
let numberFour = 10;
numberFour--;
console.log("decress 10 number is :", numberFour);


// 28. Create a variable named num with a value of 15. Use the Ternary Operator (? :) to check whether the number is greater than 10.
//  ternary operator syntax : condition ? " ": "";
let numberFive = 15;

console.log(numberFive >= 10 ? "not allow" : "allow");


/*
29. Create a variable a = 10. Use the following Assignment Operators to change its value:
+=
-=
*=
/=
*/

let numberSix = 10;

numberSix += 10;
console.log(numberSix);

numberSeven = 10;
numberSeven *= 10;
console.log(numberSeven)

numberSix -= 5;
console.log(numberSix)

numberSix /= 10;
console.log(numberSix)
// 30. Create two variables with values 50 and 30. Use the Ternary Operator to determine and print which number is greater.
let numOne = 50;
let numTwo = 30;
console.log(numOne > numTwo ? "numone is a greater " : " numtwo is a greater");

//   Basic Varriable an data type;
// 1. Declare two variables a and b. Assign them the values 10 and 20 respectively. Then, print their sum.
let i = 10;
let o = 20
let sum = i + o;
console.log(sum);

// 2. Use const to store your name in a variable and let to store your age in another. On the next line,increment the age by 1 and print it
const myNameis = "tayon";
let myAge = 23;
myAge += 1;
console.log(myNameis, myAge);

// 3. Use the typeof operator to find the data type of the following values: 42, "Hello", true, undefined,null.
let no = 42;
let hello = "Hello";
let truth = true;
let unfind = undefined;
let nullOne = null;
console.log(typeof no);
console.log(typeof hello);
console.log(typeof truth);
console.log(typeof unfind);
console.log(typeof nullOne);


// 4. Store "50" (string) in one variable and 10 (number) in another. Check what the output is when you addthem, and what it is when you subtract them.
let store = "50";
let storeOne = 10;
console.log(store + storeOne);
console.log(store - storeOne);

// 5. Explain and prove the core difference between null and undefined in JavaScript by writing code(e.g., using == and ===).

let noOne = null;
let notwo = undefined;
console.log(noOne == notwo);
console.log(noOne === notwo);
// 6. Store your birth year in a variable and subtract it from the current year to calculate your approximate age.
let myBirth = 2004;
let curentyear = 2026;
let myAgeis = curentyear - myBirth;
console.log(myAgeis);

// 7. Store true in a variable. Use the logical NOT (!) operator to reverse it and print the result.
let truthe = true;
console.log(!truthe);

// 8. If let x = 5; let y = x++;, what will be the values of x and y? Run the code with anexplanation.
let x = 5;
let l = x++;
console.log(" X :", x);
console.log("l:", l);


// 9. Combine a string variable and a number variable into a single sentence using template literals (backticks `).

let string = "tayon ";
let numberO = 22;
let sentence = `My Name is  : ${string} And my Age is :${numberO}`;
console.log(sentence);

// 10. Try to print a variable without declaring it first and see what error you get.
numberP = "tayon";
console.log(numberP);

// Intermediate (Operators & Simple Conditions)

// 11. Take a number variable. Determine whether it is Even or Odd using an if-else statement and the remainder (%) operator.
let takenum = 40;
if (takenum % 2) {
    console.log(" ood number");
} else {
    console.log("even number");
}

// 12. Write a program with a logic that states: if a person's age is 18 or older, they can vote; otherwise, they cannot.
let personOne = 17;
if (personOne >= 18) {
    console.log("person can vote");

} else {
    console.log("person cant vote");
}

// 13. Check whether a number is positive, negative, or zero using an if-else if-else structure.

let findnum = 30;
if (findnum > 0) {
    console.log("positive number");

} else if (findnum < 0) {
    console.log("negetive number");

} else {
    console.log("Zero");
}
// 14. Store any single character in a variable. Check whether it is a Vowel or a Consonant.

// 15. Use the Ternary Operator (? :) to check in a single line if a number is greater than 5.

let songka = 10;
console.log(songka > 5 ? "5 greater" : "5 less");
// 16. Use the logical AND (&&) operator to check if a number is simultaneously divisible by both 3 and 5.
let unkhwonnum = 40;
if (unkhwonnum / 3 && unkhwonnum / 5) {
    console.log("division kora jai");

} else {
    console.log("division kora jai na");
}

// 17. Create a discount system using the logical OR (||) operator—if the user isStudent or hasCoupon, they get a discount.
let isStudent = "student";
let hasCoupon = "yes";

if (isStudent || hasCoupon) {
    console.log("discount!");
} else {
    console.log("No discount");
}
// 18. If let a = "5" and let b = 5, what will be the outputs of a == b and a === b, and why?
let ab = "5";
let bc = 5;
console.log("value cheak", ab == bc);
console.log("data type and value cheak", ab === bc);
// 19. Write a condition to check if a number is between 1 and 100 (inclusive).
let findno = 20;
if (findno >= 1 && findno <= 100) {
    console.log("100 vitore ahse");
} else {
    console.log("100 vitore nai")
}
// 20. Store the current hour (e.g., 10, 15, or 22) in a variable. If the time is less than 12, print "GoodMorning"; if less than 18, print "Good Afternoon"; otherwise, print "Good Evening".

let unnum = 15;
if (unnum < 12) {
    console.log("GOOD  mornin");

} else if (unnum < 18) {
    console.log("good afternoon");
} else {
    console.log("good evening");
}

// 21. Leap Year Checker: Take a year as input and determine if it is a leap year using conditional logic.
let year = 2026;
if (year % 4 === 0) {
    console.log("this is leap year");
} else {
    console.log("this is a not leap year");
}

// 22. Grade Calculator: Write a program to calculate a student's grade (A+, A, B, F) based on their marks(e.g., 80-100 = A+).
let grade = 160;
if (grade >= 80 && grade <= 100) {
    console.log("A+");

} else if (grade >= 70 && grade <= 79) {
    console.log("A-");
}
else if (grade >= 60 && grade <= 69) {
    console.log("B");
}
else if (grade >= 50 && grade <= 59) {
    console.log("c");
}
else if (grade >= 33 && grade <= 40) {
    console.log("D");
}
else if ( grade>101) {
    console.log("invalid")
}
else {
    console.log("faill");
}

// 23. Maximum of Three: Take three different number variables. Find the largest number among them using only if-else statements, without using any built-in functions like Math.max.
let q = 29;
let w = 7;
let p = 60;
if (q > w && q > p) {
    console.log("q is a big number");
} else if (w > q && w > p) {
    console.log("w is a big number");
}
else {
    console.log("p is a big nuber");
}

// 24. Traffic Light System: Store a light color ("Red", "Yellow", "Green") in a variable. Use a switch-case statement to print the corresponding action (e.g., if Red, print "Stop").

// let light = prompt("Red , yellow, green");
// switch (light) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log(" slow");
//         break;
//     case "green":
//         console.log(" goo");
//         default:
//             console.log("wrong light");
// }

// 25. Electricity Bill: Calculate the electricity bill based on unit usage. The first 100 units cost $5 per unit, and any additional units cost $8 per unit.

let unit = 200;
if (unit <= 100) {
    console.log(unit * 5);

} else {
    console.log(unit * 5 + (unit - 100) * 8);
}

// 26. Test whether JavaScript treats an empty string "" or 0 as Truthy or Falsy by using an if condition.

if ("") {
    console.log("is trutly");
} else {
    console.log("falsly");
}


if (0) {
    console.log("truthly");
} else {
    console.log("falsy");
}

// 27. Simple Calculator: Take two numbers and an operator variable (+, -, *, /). Use a switch-case statement to perform the calculation based on that operator.

let abc = 20;
let bcd = 30;
let operator="+";
let result;
switch (operator) {
    case "+":
        result = abc + bcd;
        break;
    case "-":
        result = abc - bcd;
        break;
    case "*":
        result = abc * bcd;
        break;
    case "/":
        result = abc / bcd;
        break;
        default:
            result = " invalid";


}
// 28. If a user is logged in (isLoggedIn = true) and their profile is complete (isProfileComplete = true), grant them access to the dashboard; otherwise, show an error message.
let isLoggedIn = true;
let isProfileComplete = true;

if (isLoggedIn && isProfileComplete) {
  console.log("Access granted");
} else {
  console.log("Error");
}

// 29. Take any input in a variable. Verify whether the input is a "number" or something else using isNaN() or typeof.

let inputNum = "tayon";
if(typeof inputNum==="number" && !isNaN(inputNum)){
    console.log("is a number");

}else{
    console.log("isnt number");
}

// 30. Triangle Validator: The values of three angles of a triangle are given. Write a logic to check if the  triangle is valid (the sum of the three angles must be 180 degrees); otherwise, it is invalid.

let triangle = 40;
let triangleOne = 50;
let triangleThree = 70;
if(triangle + triangleOne + triangleThree === 180){
console.log("vadid");
}else{
    console.log('invalid');
}

