import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Setters and Getters</h2>
  <p>(Check the console!)</p>
`;

class Cart {
  #items;

  constructor(items = []) {
    this.value = items;
  }

  set value(items) {
    this.#items = Object.freeze(items);
  }

  get value() {
    return Object.freeze(this.#items);
  }

  get count() {
    return this.value.length;
  }

  add(item) {
    this.value = [...this.value, item];
  }

  remove(id) {
    this.value = this.value.filter((item) => item.id !== id);
  }
}

const cart = new Cart();
const hotDog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotDog);
console.log(cart.value);
