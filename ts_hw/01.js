// 聲明一個不可改變的常數
var age = 25;
console.log("Initial age: ".concat(age));
// 嘗試更改常數的值（會導致 TypeScript 錯誤）
// age = 30; // Error: Cannot assign to 'age' because it is a constant.
// 聲明一個可以改變的變數
var userName = "Alice";
console.log("Initial name: ".concat(userName));
userName = "Bob";
console.log("Updated name: ".concat(userName));
