import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Procedural Programming</h2>
  <p>(Check the console!)</p>
`;

const cart = [];

const addToCart = (item) => {
  cart.push(item);
};

const removeFromCart = (id) => {
  const index = cart.findIndex((obj) => obj.id === id);
  cart.splice(index, 1);
};

const hotDog = { id: "🌭", name: "Posh Dog", price: 399 };

addToCart(hotDog);
console.log(cart);

setTimeout(() => {
  removeFromCart("🌭");
  console.log(cart);
}, 2500);
