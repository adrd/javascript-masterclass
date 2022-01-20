import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Object Literals and Encapsulation</h2>
  <p>(Check the console!)</p>
`;

const cart = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  remove(id) {
    const index = this.items.findIndex((obj) => obj.id === id);
    this.items.splice(index, 1);
  },
};

const hotDog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotDog);
console.log(cart);

setTimeout(() => {
  cart.remove("🌭");
  console.log(cart);
}, 2500);
