console.log("Second Code in JS is=>", 'Hello World V(1.1)');


//For..In. This loop is particularly used for iterating the properties of an object
const person = {
    name:'Aman',
    age: 25,
    gender:'male'
};

for(let key in person)
{
    console.log(key,'=',person[key])
}
//The given code is practice code representing some of my reality=>
// let homies = (name,age,friendshipBond,friendshipSince)=>{
    
//     return {name:name,
//     bondStatus:friendshipBond,
//     age:age,
//     YOT:friendshipSince}
// }

// const Saumy = homies('Saumy',25,'Very Strong','ages');
// const Vatsal= homies('Vatsal',24,'fair-enough','since 1st year of college');
// const Ekagra = homies('Ekagra',25,'fairly-strong','Since I know Saumy');
// console.log(Saumy,Vatsal,Ekagra);


//for..of. This loop is used to iterate through the array and display its elements
const intArray = [1,2,3,4,5];
for(let numbers of intArray)
{
    console.log(numbers)
}

const stringArray=['Aman','Saumy','Vatsal','Ekagra'];
for(let strings of stringArray)
{
    console.log(strings);
}

//Challenge

function checkSpeed(speed)
{
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed<speedLimit+kmPerPoint)
    {
        return 'ok';
    }   
const returnNumber=Math.floor((speed-speedLimit)/5);
return returnNumber>12?'License Suspended':returnNumber 
}

console.log("Point:",checkSpeed(7));

const showNumbers = (displayedNumber) => {
    for (let i=0;i<=displayedNumber;i++)
    {
        i%2==0?console.log(i,'EVEN'):console.log(i,'ODD');
    }
}
showNumbers(10);

function countTruthy(arrayToBeTested) {
    let truthyCounter = 0;
for(let value of arrayToBeTested)
    if(value)
    truthyCounter++;
return truthyCounter;
}
let truthyArray=['',0,1,NaN,16,25,07,19,undefined,false,null];
console.log('Truthy Count=',countTruthy(truthyArray))
console.log(typeof(truthyArray)==='string')

function showPropertiesOfObj(obj)
{
    for(let key in obj)
    {
        if(typeof obj[key]==='string') // note the use of typeof here.
    {
        console.log(key,obj[key]); 
    }
}

}

const objValues = {
 
    name: 'Aman',
    age:25,
    gender:'male',
    experience:3,
    spouse:'no',
}

showPropertiesOfObj(objValues);

function sum(limit) {

    let sum=0;

    for(let i=1;i<=limit;i++)
     if(i%3==0||i%5==0)
     sum+=i;

     return sum;
}

console.log('The sum of multiples of 3 & 5 upto given limit =',sum(5));


//Calculate Grade Marks

function calculateGradeMarks(marks)
{
    const averageMarks=calculateAverage(marks);
   
    if(averageMarks<60)
    return 'F';
    if(averageMarks<70)
    return 'D';
    if(averageMarks<80)
    return 'C';
    if(averageMarks<90)
    return 'B';
    
    return 'A';
}

function calculateAverage(arrayMarks)
{
    let sum=0;
    let averageMarks =0;

    for(let i=0;i<marks.length;i++)
     sum+=marks[i];

    return(sum/(marks.length));
}
const marks = [90,100,90];
console.log('Grade:',calculateGradeMarks(marks))

//show Stars Function

function showStars(rowCount)
{
let row =1;
let column =1;
while(row<=rowCount)
{
 let bufferContent ='';
 while(column<=row)
 {
     bufferContent+='*';
     column++;
 }
 console.log(bufferContent);
 row++;
}

}
showStars(4);