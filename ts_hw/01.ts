// 聲明一個不可改變的常數
const age: number = 25;
console.log(`Initial age: ${age}`);

// 嘗試更改常數的值（會導致 TypeScript 錯誤）
// age = 30; // Error: Cannot assign to 'age' because it is a constant.

// 聲明一個可以改變的變數
let userName: string = "Alice";
console.log(`Initial name: ${userName}`);

userName = "Bob";
console.log(`Updated name: ${userName}`);
