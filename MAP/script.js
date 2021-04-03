let course = new Map();

course.set("react", 
{ description: "ui",
  name: "React"
});
course.set("jest", 
{ description: "testing",
  name: "test_two"
});

console.log(course);
// console.log(course.react);
console.log(course.get("react"));

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]]
]);

console.log(details.size);

details.forEach(item => console.log(item))

