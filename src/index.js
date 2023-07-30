const _ = require("lodash");
const date = Date();
const fs = require("fs");
const path = require("path");
const { read, readSync } = require("./lib/readFile");
const createStudent = require("./lib/createStudent");

// main = async (fileName) => {
//   data = await readSync(fileName);
//   console.log("day la main", data);
// };
// main("student.json");

const newStudent = {
  name: "Minh Tam",
  age: "36",
};

main = async (newStudent, fileName) => {
  await createStudent(newStudent, fileName);
  const rs = await readSync("student.json");
  console.log("day la rs", rs);
};

main(newStudent, "student.json");
