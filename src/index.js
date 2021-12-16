import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Currying and Partial Application</h2>
  <p>(Check the console!)</p>
`;

const items = Object.freeze([
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
]);

// f(a, b, c)
// f(a)(b)(c)
const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      // console.log(args.length, fn.length); // 2 2
      return fn.apply(null, args); // f(a, b, c), apply(context, [a, b, c]) executes the function, apply does pretty much fn(args)
    }
    return fn.bind(null, ...args); // f(a)(b)(c), partial function application; bind(context, a, b, c) returns a new function
  };
};

const getNameFromId = curry(
  (id, items) => items.find((item) => item.id === id).name
);

const getFries = getNameFromId("🍟", items);
const getBurgers = getNameFromId("🍔"); // partially applying

console.log(getFries);          // Jumbo Fries
console.log(getBurgers(items)); // Super Burger
