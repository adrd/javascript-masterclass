import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Imperative vs Declarative Programming</h2>
  <p>(Check the console!)</p>
`;

const items = Object.freeze([
  { id: "🍔", name: "Super Burger", price: 399 },
  { id: "🍟", name: "Jumbo Fries", price: 199 },
  { id: "🥤", name: "Big Slurp", price: 299 },
]);

// imperative way
const itemNamesImperative = [];
for (let index = 0; index < items.length; index++) {
  const item = items[index];
  itemNamesImperative.push(item.name);
}

console.log(itemNamesImperative); // ['Super Burger', 'Jumbo Fries', 'Big Slurp']

// declarative way
const itemNamesDeclarative = items.map(function (item) {
  return item.name;
});

console.log(itemNamesDeclarative); // ['Super Burger', 'Jumbo Fries', 'Big Slurp']

const itemsTotalDeclarative = items
  .map(function (item) {
    return item.price;
  })
  .reduce(function (price, nextPrice) {
    return price + nextPrice;
  });

console.log(itemsTotalDeclarative); // 897
