import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Lambda Expressions vs Anonymous Functions</h2>
  <p>(Check the console!)</p>
`;

const items = Object.freeze([
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
]);

// function declaration
function getItemName(item) {
  return item.name;
}

console.log(items.map(getItemName)); // ['Super Burger', 'Jumbo Fries', 'Big Slurp']

// anonymous function
console.log(
  items.map(function (item) {
    return item.name;
  })
); // ['Super Burger', 'Jumbo Fries', 'Big Slurp']

// lambda expression
const getItemNameExp = (item) => item.name;
console.log(items.map(getItemNameExp)); // ['Super Burger', 'Jumbo Fries', 'Big Slurp']
