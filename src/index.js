import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Class Inheritance via ‘extends’</h2>
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

class Product {
  id;
  name;
  price;
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  get displayName() {
    return `${this.id} ${this.name}`;
  }
}

class Food extends Product {
  extras;
  constructor(id, name, price, extras = []) {
    super(id, name, price);
    this.extras = extras;
  }
}

class Drink extends Product {
  size;
  constructor(id, name, price, size) {
    super(id, name, price);
    this.size = size;
  }
}

const hotdog = new Food("🌭", "Posh Dog", 399, ["mustard"]);
const burger = new Food("🍔", "Super Burger", 449, ["bacon", "pickle"]);

const smallDrink = new Drink("🥤", "Big Slurp", 199, "small");
const mediumDrink = new Drink("🥤", "Big Slurp", 199, "medium");
const largeDrink = new Drink("🥤", "Big Slurp", 199, "large");

console.log(hotdog instanceof Product);
console.log(hotdog instanceof Food);

cart.add(hotdog);
cart.add(burger);
cart.add(smallDrink);
cart.add(mediumDrink);
cart.add(largeDrink);
console.log(cart.value);
