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
console.log(myNum ,typeof myNum);


console.log("------Operators - -------");


/* 21. Create two variables with values 20 and 10. Perform the following operations:
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
*/
let d = 20;
let e = 10; 
console.log(d+e);
console.log(d-e);
console.log(d*e);
console.log(d/e);

// 22. Create two variables with values 25 and 4. Use the Modulus (%) operator to find the remainder.
let f = 25;
let g = 4;
console.log(f%g);

/*
23. Create two variables, a = 10 and b = 5. Perform the following comparisons:
a > b
a < b
a === b
a !== b
*/
let j = 10;
let k  = 5;
if(j>k){
    console.log("j is big");
}else{
    console.log("k is big ");
}



if(j<k){
    console.log("j is big");
}else{
    console.log("k is big ");
}



if(j===k){
    console.log("True");
}else{
    console.log("sotik noi ");
}



if(j!==k){
    console.log("True");
}else{
    console.log("false");
}

// 24. Create a variable named age with a value of 20. Check whether the age is greater than 18.
let ageOne = 20;
if(18<20){
    console.log(" 20 number big ");
}else{
    console.log("20 number small");
}

// 25. Create two variables, a = 15 and b = 10. Use the Logical AND (&&) and Logical OR (||) operators to test different conditions.
let  t = 15;
let y = 10;
if (t>y && y<=t){
    console.log("T is a big number");
}else{
    console.log("Y is a big number ");
}


//  or operator      ;
 if ( y<t|| t<y){
    console.log("t is a small number ")
 }else{
    console.log("y is a small number")
 }

//  26. Create a variable named number with a value of 7. Use the Increment (++) operator to increase its value by 1.
let numberThree = 7;
numberThree++;
console.log( "increment 1  is :",numberThree);

// 27. Create a variable named number with a value of 10. Use the Decrement (--) operator to decrease its value by 1.
 let numberFour = 10;
 numberFour--;
 console.log( "decress 10 number is :",numberFour);


// 28. Create a variable named num with a value of 15. Use the Ternary Operator (? :) to check whether the number is greater than 10.
//  ternary operator syntax : condition ? " ": "";
 let numberFive = 15;
 
 console.log(numberFive>=10? "not allow": "allow");


/*
29. Create a variable a = 10. Use the following Assignment Operators to change its value:
+=
-=
*=
/=
*/ 

let numberSix = 10;

numberSix +=10;
console.log(numberSix);

numberSeven = 10;
numberSeven *= 10;
console.log(numberSeven)

numberSix -=5;
console.log(numberSix)

numberSix /=10;
console.log(numberSix)
// 30. Create two variables with values 50 and 30. Use the Ternary Operator to determine and print which number is greater.
 let numOne = 50;
 let numTwo = 30;
 console.log(numOne>numTwo? "numone is a greater ": " numtwo is a greater");

