import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Function Pipes and Currying</h2>
  <p>(Check the console!)</p>
`;

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// f(a, b, c)
// f(a)(b)(c)
const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      // console.log(args.length, fn.length);
      return fn.apply(null, args); // f(a, b, c), apply(context, [a, b, c]) executes the function, apply does pretty much fn(args)
    }
    return fn.bind(null, ...args); // f(a)(b)(c), partial function application; bind(context, a, b, c) returns a new function
  };
};

const split = curry((separator, string) => string.split(separator));
const join = curry((separator, string) => string.join(separator));
const map = curry((fn, array) => array.map(fn));

const toLowerCase = (x) => x.toLowerCase();

const slugify3 = pipe(split(" "), map(toLowerCase), join("-"));

console.log(slugify3("Ultimate Courses")); // ultimate-courses
console.log(slugify3("Todd Motto"));       // todd-motto