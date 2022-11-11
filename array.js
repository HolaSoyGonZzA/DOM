const fruits = ["Apple", "Banana", "Orange"];

const print = (e, i, a) => {
  console.log("print", e, i, a);
};

fruits.forEach(print);

// Map
const m = fruits.map((el) => {
  return `This is ${el}`;
});

// Filter
const f = fruits.filter(function (el) {
  return el === "Apple"; // true
});

// Reduce
// [0, 1, 2]
const r = fruits.reduce((prev, curr) => {
  return Number(prev) + Number(curr.length);
}, 0); // 0.00 // 0

console.log(r);

// Find
const ff = fruits.find((el) => el === "Apple");

if (ff) {
  console.log(`Words: ${ff.length}`);
}
