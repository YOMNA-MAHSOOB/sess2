// // // interface User {
// // //     id: number;
// // //     name: string;
// // //     address: Address;
// // //     roles: Role[];
// // // }
// // // interface Address {
// // //     city: string;
// // //     street: string;
// // // }
// // // type Role = "admin" | "member" | "guest";
// // // const jjj:User={
// // //     id:1,
// // //     name:"yomna",
// // //     address:{
// // //         city:"cairo",
// // //         street:"3455"
// // //     },
// // //     roles: ["member", "admin"] 
// // // }
// // // console.log(jjj);
// // function sayHello() :string{
// //     return "hello "+ Name("yomna")
// // }
// // function Name(n:string) {
// //     return n
// // }
// // console.log(sayHello());
// // interface Person {
// //     name: string;
// //     age: number;
// // }
// // interface Employee {
// //     name: string;
// //     age: number;
// //     employeeId?: number;
// // }
// // const emp:Employee ={
// //     name:"yomna",
// //     age:20,
// //     employeeId:1
// // }
// // const per:Person=emp;
// // const p:Person ={
// //     name:"yomna",
// //     age:20,
// // }
// // const e:Employee=p
// // Welcome to TypeScript 💙
// //1st:variables & Data types
// /*let|const var_name:data type=val*/
// var num = 2;
// var Name = "yomna";
// var any_type = 3;
// any_type = true;
// any_type = "hi";
// var greeding = "hello";
// var person1 = { age: 19, name: "yomna" };
// //2nd:Functions
// /*
// arrow functions
// const fun_name:(params:data type)=>return type=(params)=>{
//     body
// }
// */
// var sum = function (x, y) {
//     return x + y;
// };
// //3rd:Arrays
// var arr = [1, 2, true];
// var nums = [1, 2];
// nums.push(3);
// var mixed_arr = [1, "ypy"];
// var readonlyArr = [1, 2, 3];
// //readonlyArr.push(2)
// var a = ["1", "2"];
// //tuple
// var t = [1, true, "yomna"];
// //4- Generics
// function Generic(variables) {
//     return variables;
// }
// var v = Generic(23);
// //To use this interface
// var mem = {
//     name: "Mohsen",
//     age: 28,
//     committee: "BackEnd"
// };
// //7-class
// var User = /** @class */ (function () {
//     function User(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//     User.prototype.greet = function () { console.log("Hello, ".concat(this.name)); };
//     return User;
// }());
// var user = new User(1, "yomna");
// console.log(user);
