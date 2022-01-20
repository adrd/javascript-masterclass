import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Object Literals and Factory Functions</h2>
  <p>(Check the console!)</p>
`;

const createCart = (items = []) => {
  return {
    items,
    add(item) {
      this.items.push(item);
    },
    remove(id) {
      const index = this.items.findIndex((obj) => obj.id === id);
      this.items.splice(index, 1);
    },
  };
};

const cart = createCart();
const hotDog = { id: "🌭", name: "Posh Dog", price: 399 };

cart.add(hotDog);
console.log(cart);

cart.items.splice(0, 1); // remove one item from index 0, it's not recommended to do this
console.log(cart);
