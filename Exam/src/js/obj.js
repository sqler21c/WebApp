var emptyObject = {};
console.log(typeof emptyObject);

var person = {
  name: 'lee',
  gender: 'male',
  sayHello: function(){
    console.log('hi  ' + this.name);
  }
};

console.log(typeof person);
console.log(person);
person.sayHello();


var person2 = new Object();
person2.name = 'lee';
person2.gender = 'male';
person2.sayHello = function(){
  console.log('dhd ' + this.name);
};

console.log(typeof person2);
console.log(person2);
person2.sayHello();


function person3(name, gender){
  this.name = name;
  this.gender = gender;
  this.sayHello= function(){
    console.log('dkdk ' + this.name);
  };
}

var person4 = new person3('kim', 'pemale');
person4.sayHello();

var person = {
  'first-name': 'unnnn',
  "last-name" : "lee",
  gender : 'male'
};

console.log(person["gender"]);
console.log(person['gender']);
console.log(person['first-name']);
console.log(person["first-name"]);
console.log(person['last-name']);
console.log(person["last-name"]);


delete person.gender;
delete person;
console.log(person);

var prop;
for(prop in person){
  console.log(prop + ' : ' + person[prop]);
}


var student = {
  name: 'name',
  score: 90
};
console.log(student.hasOwnProperty('name'));
console.dir(student);


(function(){
  var MYAPP = {};

  MYAPP.student = {
    name: 'Lee',
    gender: 'male'
  };

  console.log(MYAPP.student.name);
}());

//console.log(MYAPP.student.name);

function square(number){
  console.log(arguments);
  console.log(this);
  return number*number;
}

var result = square();

var obj1 = {
  name:'lee',
  sayName:function(){
    console.log(this.name);
  }
}

var obj2 = {
  name:'kim'
}

obj2.sayName = obj1.sayName;
obj1.sayName();
obj2.sayName();

function Person(name){
  this.name = name;
}
/*
person.prototype.getName = function(){
  return this.name;
}
*/
var me = new person('lee');
console.log(me.getName());
Person.prototype.name = 'kim';
console.log(Person.prototype.getName());

var ga = "Global variable";

console.log(ga);
console.log(window.ga);

function foo() {
  console.log("invoked!");
}
window.foo();
