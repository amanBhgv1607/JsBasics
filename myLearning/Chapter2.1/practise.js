function DesiConstructor(age)  {
this.age=age;
this.relationshipStatus= function (age) {
    if(age<21)
    console.log('Not eligible for marriage');

    else
    console.log('Eligible for marriage');
}
this.relationshipStatus(age);
}

const candidate= new DesiConstructor(22);
console.log(candidate);

function checkPrototype(name)
{
    this.name=name;
    console.log('Heeeee')
}
checkPrototype.prototype.age=2;
const personObj= new checkPrototype('Aman');
console.log(personObj.__proto__);