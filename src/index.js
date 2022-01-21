import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Prototypes and .__proto__</h2>
  <p>(Check the console!)</p>
`;

console.log({}.constructor);
console.log({}.__proto__);
console.log({} instanceof Object); // true, under the hood it does {} = new Object

console.log([].constructor);
console.log([].__proto__);
console.log([] instanceof Array);  // true, instanceof is taken into consideration the prototype chain
console.log([] instanceof Object); // true

const createCart = (items = []) => {
  return {
    items: Object.freeze(items),
    add(item) {
      const state = [...this.items, item];
      this.items = Object.freeze(state);
    },
    remove(id) {
      const state = this.items.filter((item) => item.id !== id);
      this.items = Object.freeze(state);
    },
  };
};

const cart = createCart();
const hotDog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotDog);
console.log(cart);

console.log(Object.isFrozen(cart.items));
console.log(cart);
