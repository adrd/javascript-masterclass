import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Immutable vs Mutable Concepts</h2>
  <p>(Check the console!)</p>
`;

let a = "Super Burger";
a = "Big Slurp";

const b = a.slice(0, 1);

console.log(a, b); // a = Big Slurp b = B

const x = Object.freeze({ id: "🍟", name: "Jumbo Fries", price: 199 });
// x = 1234;
// x.id = "😎";

console.log(x);
