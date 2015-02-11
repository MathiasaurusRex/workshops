class Obj{
 constructor(){
  this.firstName = "Bill";
  this.lastName = "Sussman";
  this.age = 33;
 }
 getAge(){
  return this.age;
 }
 getName(){
  return `${this.firstName} ${this.lastName}`;
 }
}

class NewObj extends Obj{
 constructor(){
  super();
 }

 add(one, two){
  return one + two;
 }
}

var obj = new Obj();
var newObj = new NewObj();
console.log(newObj.getAge()); // outputs "Bill Sussman"
console.log(newObj.getName()); // outputs 33
console.log(newObj.add(1, 2)); // outputs "Bill Sussman"
console.log(obj.add(1, 2)); // Error because obj doesn't have add();

