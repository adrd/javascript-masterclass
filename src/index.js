import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Pure Functions and Referential Transparency</h2>
  <p>(Check the console!)</p>
`;

const items = Object.freeze([
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
]);

// Pure Function?
// 1. Referential transparency (given same arguments (input) returns same result (output))
// 2. Side-Effect free (something else does not happen because of function execution)

// const getTotalImpure = () => {
//   console.log(items.reduce((x, y) => x + y.price, 0)); // 897, console.log() = side effect, items is not passed as argument = side effect
// };

// getTotalImpure();

// const getTotalImpure1 = () => {
//   document.querySelector("#app").innerHTML = items.reduce(
//     (x, y) => x + y.price,
//     0
//   );
// }; // #app might not exist, side effect, items is not passed as argument = side effect

// getTotalImpure1();

const getTotalPure = (v) => v.reduce((x, y) => x + y.price, 0);
// console.log(getTotalPure(items)); // 897
document.querySelector("#app").innerHTML = getTotalPure(items);
