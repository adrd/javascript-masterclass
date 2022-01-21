import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Constructor Functions and ‘new’</h2>
  <p>(Check the console!)</p>
`;

function Cart(items = []) {
  this.items = Object.freeze(items);
}

Cart.prototype.add = function (item) {
  const state = [...this.items, item];
  this.items = Object.freeze(state);
};

Cart.prototype.remove = function (id) {
  const state = this.items.filter((item) => item.id !== id);
  this.items = Object.freeze(state);
};

const cart = new Cart();
const hotDog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotDog);
console.log(cart);

console.log(cart.constructor);
console.log(cart.__proto__);
console.log(cart instanceof Cart); // true
