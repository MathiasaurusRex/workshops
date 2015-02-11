var Obj = function Obj() {
  "use strict";
  this.firstName = "Bill";
  this.lastName = "Sussman";
  this.age = 33;
};
($traceurRuntime.createClass)(Obj, {
  getAge: function() {
    "use strict";
    return this.age;
  },
  getName: function() {
    "use strict";
    return (this.firstName + " " + this.lastName);
  }
}, {});
var NewObj = function NewObj() {
  "use strict";
  $traceurRuntime.superConstructor($NewObj).call(this);
};
var $NewObj = NewObj;
($traceurRuntime.createClass)(NewObj, {add: function(one, two) {
    "use strict";
    return one + two;
  }}, {}, Obj);
var obj = new Obj();
var newObj = new NewObj();
console.log(newObj.getAge());
console.log(newObj.getName());
console.log(newObj.add(1, 2));
console.log(obj.add(1, 2));
