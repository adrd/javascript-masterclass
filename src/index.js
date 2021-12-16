import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Memoization</h2>
  <p>(Check the console!)</p>
`;

const factorial = (n) => {
  if (n > 1) 
    return n * factorial(n - 1);

  return 1;
};

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    // console.log(key); // [9, {"name":"Todd Motto"}], [6]
    if (key in cache) {
      return cache[key];
    } else {
      cache[key] = fn.apply(null, args);
      return cache[key];
    }
  };
};

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(9, { name: "Todd Motto" })); // 362880
console.log(memoizedFactorial(6)); // 720
console.log(memoizedFactorial(9, { name: "Todd Motto" })); // 362880
