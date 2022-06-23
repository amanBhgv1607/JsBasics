//Learning Objets in JS or OOP working in JS.

const circles = {
    radius:1,
    location: {
        x:1,
        y:1
    },
    draw: function () {          // this function is known as method here since its defined in an object
        console.log('Draw');
    }
}

circles.draw();


//Factory Functions to be used when we want to create the multiple objects with the properties defined in the factory function(object).

function createCircle(radius)
{
    let arrayBrain=[1,3,4,'Aman',true,null,undefined,'a'];
    return {
        radius,
        draw() {
            console.log('draw with radius=>',radius);
        },
        objArray:arrayBrain,
        lund() {console.log('......',this.objArray)}
    }
}

const circle1= createCircle(1);
const circle2= createCircle(2);
console.log(circle1.lund(),circle2.objArray[2]);

//Creating a constructor



function Circle(radius) //Pascal Notation used in Constructor not Camel Notation
{
 this.radius=radius;    //'this' refers to the object that is executing the current piece of code. 
 this.draw=()=>{        //Here 'this' refers an empty object. And we are adding a new property to the empty object.
     console.log('constructor Draw');
 }   
}

const circle=new Circle(2); //'new' operator is must.
/* Purpose of 'new' keyword=>
1. Creating a new empty object.
2. Making 'this' to refer to the newly created object and adding new properties to the object.
3. Returning the newly created object from the constructor function. 
*/ 

function abc()
{
    console.log('Executing constructor object!');
}

const xyz= new abc();
xyz.radius=5; // adding a new property to newly created object and assigning this prop to it.
console.log(xyz);
const pqr = new abc();
console.log(pqr)// A new property is not added to the newly created object since the object can not be reassigned.
// One can use Function or Object Prototype to add the specific properties in the prototype object of the function ie. function abc() in the given example.

const house = {     // Object Created
    location:{      //Property of the object while defining it.
        x:1,
        y:1,
    }

}

house.type='Residential'; // adding new property in the current object.

// adding a new function and making it a part of the object!
house.draw=function ()    
{  
    console.log('Draw the house structure!');
    return 'value'
}


console.log(house.draw()); // O/p = house= {all properties and all functions(added either during defining the object or adding it externally.)}

// In the above example, we can see the use of 'const' for object creation. const means we can not assign/reset any new value to it but we can modify the existing object properties.

console.log(circle1.constructor); // Every object defined in JS has a constructor as JS created a new object by using its default constructor, Object.
 
function tryDemoFactory(radius) {
 return {
  radius,
 }   
}
const tryObj= tryDemoFactory(4);
console.log(tryObj.constructor) // O/P=> ƒ Object() { [native code] }
/* While Creating an object, the 'Object' is used as a constructor function by default by JS.
 Hence, JS has its own constructor function while creating an object. We can define and use our own 
 constructor to create the object and define and assign its properties.
 let tryObj = new Object(); => JS automatically creates the this constructor. 
*/

function DemoConstructor(radius) {
    this.radius=radius;
}


const tryConstructorObj= new DemoConstructor(5);
console.log(tryConstructorObj.constructor); // O/P=> f DemoConstructor(radius) {...} 



//Every Function in JS is an Object. WTF!!!!

function FunctionIsObject (radius)
{
    this.radius=radius;
    this.draw=function() {
        console.log("Draw")
    }
}

FunctionIsObject.call({},4);   //The first arg is an empty Object which 'this' of constructor will refer to.

//         OR

const objFunction=new FunctionIsObject(4); //'new' takes care of creating an empty object
 
// {FunctionIsObject.call({},1);} = {const objFunction=new FunctionIsObject(4);}

FunctionIsObject.apply({},[2,3,4])