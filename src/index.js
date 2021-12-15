import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Immutable Data Structures</h2>
  <p>(Check the console!)</p>
`;

const items = Object.freeze([
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
]);

// array - add
console.log("-------array add---------");

const newItem = { id: "🌭", name: "Posh Dog", price: 299 };
// items.push(newItem); // mutable way

const newItems = [...items, newItem]; // immutable way, spread operator (...) uses a shallow copy

console.log(items);    // 3 items
console.log(newItems); // 4 items

// array - remove
console.log("-------array remove---------");

// const removed = items.splice(0, 1); // mutable way
// console.log(removed, items);        // { id: "🍔", name: "Super Burger", price: 399 }; 2 items remains in initial array

const updatedItems = items.filter((item) => item.id !== "🍔"); // immutable way
console.log(updatedItems, items); // updatedItems = 2 items; items = 3 items, remains unchanged

// objects - add
console.log("-------objects add---------");

const item = { id: "🌭", name: "Posh Dog" };
// item.price = 299;  // mutable way
// console.log(item); // item = {id: '🌭', name: 'Posh Dog', price: 299}

const itemThatIsNew = { ...item, price: 299 }; // immutable way, spread operator (...) uses a shallow copy
console.log(item, itemThatIsNew); // item = {id: '🌭', name: 'Posh Dog'}; itemThatIsNew = {id: '🌭', name: 'Posh Dog', price: 299}

// objects - remove
console.log("-------objects remove---------");

const itemToRemove = { id: "🌭", name: "Posh Dog", price: 299 };
// console.log(itemToRemove); // {id: '🌭', name: 'Posh Dog', price: 299}
// delete itemToRemove.price; // mutable way
// console.log(itemToRemove); // {id: '🌭', name: 'Posh Dog'}

const { price, ...leftOverItems } = itemToRemove; // immutable way
console.log(price, itemToRemove); // price = 299; itemToRemove = {id: '🌭', name: 'Posh Dog', price: 299}
console.log(leftOverItems);       // leftOverItems = {id: '🌭', name: 'Posh Dog'}

// identity
console.log("-------identity---------");

console.log({} === {}); // false
console.log([] === []); // false
console.log(itemToRemove === itemToRemove);  // true
console.log(itemToRemove === leftOverItems); // false
