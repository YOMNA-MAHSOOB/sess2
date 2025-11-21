// Welcome to TypeScript 💙
//1st:variables & Data types
/*let|const var_name:data type=val*/
var num = 2;
var Name = "yomna";
var any_type = 3;
any_type = true;
any_type = "hi";
var greeding = "hello";
var person1 = { age: 19, name: "yomna" };
//2nd:Functions
/*
arrow functions
const fun_name:(params:data type)=>return type=(params)=>{
    body
}
*/
var sum = function (x, y) {
    return x + y;
};
//3rd:Arrays
var arr = [1, 2, true];
var nums = [1, 2];
nums.push(3);
var mixed_arr = [1, "ypy"];
var readonlyArr = [1, 2, 3];
//readonlyArr.push(2)
var a = ["1", "2"];
//tuple
var t = [1, true, "yomna"];
//4- Generics
function Generic(variables) {
    return variables;
}
var v = Generic(23);
//To use this interface
var mem = {
    name: "Mohsen",
    age: 28,
    committee: "BackEnd"
};
//7-class
var User = /** @class */ (function () {
    function User(id, name, age, committe) {
        this.id = id;
        this.name = name;
        this.committee = committe;
        this.age = age;
    }
    User.prototype.greet = function () { console.log("Hello, ".concat(this.name)); };
    return User;
}());
var user = new User(1, "yomna", 20, "back");
console.log(user);
var e = {
    id: 1,
    name: "Yomna",
    email: "yomna@example.com"
};
var emp = {
    id: 2,
    name: "Ali"
}; // Error: Property 'email' is missing
//BUTT!
var partial_User = {
    id: 3
}; // Works, name & email are optional
;
var p1 = {
    name: "Bianka",
    age: 5,
    employeeId: 101
};
var person = p1; // works
var p = {
    name: "Bianka",
    age: 5
};
//const e: info = p; // Error
// But it can work in 2 cases!  +2 mohsens
