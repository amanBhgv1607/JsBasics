console.log("The first code is always Hello World!");

// Object Creation

let Person = {
    name: 'Aman Bhargava',
    age: 25,
    gender:'male',
    nameArray: [1,2,3,4]
}
console.log("Person's info=>",Person);


//Array Creation

let detailsArray=[{name:'Vinita Bhargava',age:49,gender:'female'},
                  {name:'Akhilesh Bhargava',age:57,gender:'male'},
                  27, true];
//let duplicate = detailsArray.map((key,value)=>{[key]=value})
console.log(detailsArray.length);

//Function Creation

function display(name,lastName)
{
    console.log('Hello '+name+' '+lastName);
}

display('Shivani');
display('Shivani','Bhargava');


//Operators

// Popular Arithematic operators are -:+,-,*,/,%

let x = 5;
let y = 3;
console.log(x**y); //Exponential Operator in js

//Assignment Operator eg.- '='

let z=0;
z+=5; //Another Assignment Operator
console.log("Assignment Operator value=>",z);


//Comparison OR Relational Operators
//They result in a boolean value
console.log(x>5);
console.log(x>=5);
console.log(x<5);
console.log(x<=5);

//Comparison for the equality
console.log(x===5) // Strict Equality Operator(used both for type+value).Must be used for good practise in JS
console.log(x!==5)

//Lose Equality Operator(checks only for the Values)
console.log(true==1) //RHS is boolean but LHS a no. So LHS changes its type to boolean and checks for the equality of values only
console.log(true==3) //False since 3 does not represent a boolean value.
console.log('1'==1)// True coz the values are same and LHS converted its type to RHS type

//Ternary Operators

let color = {color1:'red',color2:'green'}
let decider = color.color1==='blue'?1:0;
console.log("The ternary operated Value=>",decider)

//Logical Operators with Boolean
/* TRUE && TRUE = TRUE
FALSE && TRUE = FALSE
FALSE || TRUE = TRUE
FALSE || FALSE = FALSE
TRUE=!FALSE
*/
//Logical Operators without Boolean

/* We have either Falsy(False) values or Truthy Values which are not exactly boolean.
Falsy Values=>
1. False
2. Undefined
3. Null
4. 0
5. ''
6. NaN

Truthy Values=>
Everything thats not Falsy is Truthy. Eg => 1, Aman, etc.
*/
let testVal = false || 1 || 2; // 1 is the value stored as JS Engine finds out the first
 console.log(testVal);            //truthy value which is 1 here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
console.log(false||0||NaN||'AMAN'||4||undefined); // Output here is AMAN as it's 1st truthy.

let a = 'red';
let b= 'blue';

let c= a;
a=b;
b=c;
console.log(a);
console.log(b);

function maxOfTwo(number1,number2)
{
    return number1>number2?number1:number2;
}
console.log(maxOfTwo(9,7));

//Factory Function

 let createCircle=(radius)=>
{
    return {
        radius:radius,
        draw() {
            console.log("Draw the circle")
        }
    }
}

const circle1 = createCircle(2);
console.log(circle1);

//Constructor Function
let Circle = (radius)=> {
    this.radius=radius;
    this.draw = ()=>{
        console.log("draw");
    }
}

const circle = new Circle(1);
/*'New' Keyword creates an absolutely new empty object like=> const obj ={}.
Then the 'this' refers to that newly created object and adds the new key-value pair to it.
At last, it returns the constructor values to create a newly created object.
*/

