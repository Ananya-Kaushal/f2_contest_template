/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(person => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "21", profession: "developer" });
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(person => person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  let newArr = [
    { id: 4, name: "jim", age: "22", profession: "designer" },
    { id: 5, name: "pam", age: "23", profession: "developer" }
  ];
  let concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
