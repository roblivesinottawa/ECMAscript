const id = Symbol();
const price = Symbol();


const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course",
};

const otherData = {
  price: 10.99,
  numberOfStudents: 100
}


courseInfo[id] = 41284;
otherData[price] = 12.99
console.log(courseInfo);
console.log(typeof(otherData))