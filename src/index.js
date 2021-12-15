import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Higher-Order Functions</h2>
  <p>(Check the console!)</p>
`;

const items = Object.freeze([
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
]);

// Higher Order Function (HOF)
// 1. Return a new function
// 2. Take other functions as arguments

const getNameFromId = (id) => (items) =>
  items.find((item) => item.id === id).name;

const getFries = getNameFromId("🍟");
const getBurgers = getNameFromId("🍔");

console.log(getFries(items));   // Jumbo Fries
console.log(getBurgers(items)); // Super Burger
