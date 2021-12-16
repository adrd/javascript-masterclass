import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript Masterclass</h1>
  <h2>Function Composition and Currying</h2>
  <p>(Check the console!)</p>
`;

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

// f(a, b, c)
// f(a)(b)(c)
const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      // console.log(args.length, fn.length); // 2 2
      return fn.apply(null, args); // f(a, b, c), apply(context, [a, b, c]) executes the function, apply does pretty much fn(args)
    }
    return fn.bind(null, ...args); // f(a)(b)(c), partial function application; bind(context, a, b, c) returns a new function
  };
};

console.log("---------initial-----------");

const slugify = "Ultimate Courses"
  .split(" ")
  .map((v) => v.toLowerCase())
  .join("-");
console.log(slugify); // ultimate-courses

console.log("---------curry - partial application-----------");

// const split = (separator) => (string) => string.split(separator);
const split = curry((separator, string) => string.split(separator));
// console.log(split(" ")("Ultimate Courses")); // ['Ultimate', 'Courses']
const join = curry((separator, string) => string.join(separator));
const map = curry((fn, array) => array.map(fn));

const splitText = split(" ")("Ultimate Courses");
const mappedText = map((x) => x.toLowerCase())(splitText);
const joinText = join("-")(mappedText);

console.log(joinText); // ultimate-courses

console.log("---------function composition 1-----------");

const toLowerCase = (x) => x.toLowerCase();
const slugify2 = (str) => join("-")(map(toLowerCase)(split(" ")(str)));
console.log(slugify2("Ultimate Courses")); // ultimate-courses

console.log("---------function composition 2-----------");

const slugify3 = compose(join("-"), map(toLowerCase), split(" "));

console.log(slugify3("Ultimate Courses")); // ultimate-courses
console.log(slugify3("Todd Motto"));       // todd-motto
