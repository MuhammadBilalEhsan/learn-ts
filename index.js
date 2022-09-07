// we will compile typescript `tsc index.ts` and run the javascript `node index.js`
// let a: number = 5;
// console.log("a", a);
// let fullName: string = "bilal";
// console.log("fullName", fullName);
// let age: number;
// age = 19;
// console.log("age", age);
// const names: string[] = [];
// names.push("67");
// console.log("names", names);
// function sum(a: number, b: number): number {
//   return a + b;
// }
// sum(1, 4);
// _____________________________________________Tuples____________________________________________________
// let address: [number, string, number];
// address = [111, "hello", 34];
// let user: { name: string };
// user = { name: "bilal" };
// let anotherUser: { name: string; age?: number };
// anotherUser = { name: "bilal" };
// anotherUser = { name: "bilal", age: 19 };
// function add(a: string, b?: string) {
//   //   return a + b;
//   return b ? a + b : a;
// }
// _____________________________________________Interface____________________________________________________
// interface Person {
//   name: string;
//   id: number;
//   age: number;
//   //   age?: number;
// }
// let p: Person;
// p = { name: "Bilal", id: 1, age: 19 };
// // p = { name: "Bilal", id: 1 };
// interface User {
//   name: string;
//   id: number;
//   age: number;
//   //   age?: number;
// }
// interface Student {
//   name: string;
//   rollNo: number;
//   age: number;
//   //   age?: number;
// }
// let p1: User | Student; //  Union
// p1 = {
//   name: "bilal",
//   age: 19,
//   id: 2,
//   //   rollNo: 23,
// };
// let p2: User & Student; // intersection
// p2 = {
//   name: "bilal",
//   age: 19,
//   id: 23,
//   rollNo: 564,
// };
// _____________________________________________Type Alias____________________________________________________
// type Count = string | number;
// let a: Count;
// a = "1";
// a = 1;
// console.log("a", a);
// type x = string & number; // never
// let a: x;
// //  a= everything  = error
// const n: [] = []; // never array
// n.push(23);
// _____________________________________________Class____________________________________________________
// JS class
// class Car {
//   brand;
//   constructor(brand) {
//     this.brand = brand;
//   }
//   getBrand() {
//     console.log("brand", this.brand);
//   }
// }
// let c1 = new Car("Audi");
// c1.getBrand();
// // To be continued
// _____________________________________________Generics____________________________________________________
function gen(a, b) {
    return [a, b];
}
// const genString = gen<string>("2", "3");
// console.log("🚀genString", genString);
// const genNumber = gen<number>(2, 3);
// console.log("🚀genNumber", genNumber);
// const genArray = gen<Array<number>>([2], [3]);
// console.log("🚀genArray", genArray);
var genArray = gen([2], ["3"]);
console.log("🚀genArray", genArray);
