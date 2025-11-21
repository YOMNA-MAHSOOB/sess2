

// Welcome to TypeScript 💙

//1st:variables & Data types

/*let|const var_name:data type=val*/
let num:number=2
let Name:string="yomna"
let any_type:any=3
any_type=true
any_type="hi"


type my_type="welcome"|"hello"
let greeding:my_type="hello" 
type person_info={ age:number,name:string}
let person1:person_info={age:19,name:"yomna"}


//2nd:Functions
/*
arrow functions
const fun_name:(params:data type)=>return type=(params)=>{
    body
}
*/ 
const sum:(x:number,y:number)=>number=(x,y)=>{
    return x+y
}

//3rd:Arrays
let arr=[1,2,true]
let nums:number[]=[1,2]
nums.push(3)
let mixed_arr:(number|string)[]=[1,"ypy"]

let readonlyArr: readonly number[] = [1, 2, 3];
//readonlyArr.push(2)


let a:Array<string>=["1","2"]
//tuple
let t:[number,boolean,string]=[1,true,"yomna"]


//4- Generics
function Generic<T>(variables:T):T {
    return variables
}
let v=Generic<number>(23);

//5- Interfaces:
interface member {
    name: String;
    age: Number;
    committee: String;
}

//To use this interface

const mem:member={
name:"Mohsen",
age:28,
committee:"BackEnd" }



//7-class
class User implements member {
    id:number;
    name:string;
    age:number;
    committee: String;
  constructor( id: number,  name: string,age:number,committe:string) {
    this.id=id;
    this.name=name;
    this.committee=committe
    this.age=age
  }
  greet() { console.log(`Hello, ${this.name}`); }
}
const user= new User(1,"yomna",20,"back")
console.log(user);


//Partial<Type>

interface Employee {
 id: number;
 name: string;
 email?: string;
}
const e : Employee = {
 id: 1,
 name: "Yomna",
 email: "yomna@example.com"
};

const emp: Employee = {
 id: 2,
 name: "Ali"
}; // Error: Property 'email' is missing
//BUTT!
const partial_User: Partial<Employee> = {
 id: 3
}; // Works, name & email are optional

//or name?: "Ali"// Works, name is optional



//Shape Compatibility

interface Person {
   name: string;
   age: number; }
interface info {
   name: string,
   age: number,
   employeeId: number
};
const p1: info = {
   name: "Bianka",
   age: 5,
   employeeId: 101
};

const person: Person = p1; // works



const p: Person = {
   name: "Bianka",
   age: 5 };
//const e: info = p; // Error

// But it can work in 2 cases!  +2 mohsens

