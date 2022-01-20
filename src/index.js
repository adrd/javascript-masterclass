import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Frozen State and Immutable Patterns</h2>
  <p>(Check the console!)</p>
`;

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
