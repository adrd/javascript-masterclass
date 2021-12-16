import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Recursion</h2>
  <p>(Check the console!)</p>
`;

// 3 x 2 x 1 = 6
// 5 x 4 x 3 x 2 x 1 = 120

console.log("------factorial imperative-------");

const factorialImperative = (n) => {
  let result = 1;
  for (let count = n; count > 1; count--) {
    result = result * count;
  }
  return result;
};

console.log(factorialImperative(3)); // 6
console.log(factorialImperative(6)); // 720
console.log(factorialImperative(9)); // 362880

console.log("------factorial declarative-------");

const factorialDeclarative = (n) => {
  if (n > 1) 
    return n * factorialDeclarative(n - 1);

  return 1;
};

console.log(factorialDeclarative(3)); // 6
console.log(factorialDeclarative(6)); // 720
console.log(factorialDeclarative(9)); // 362880
