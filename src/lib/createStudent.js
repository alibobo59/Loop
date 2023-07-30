const { readSync } = require("./readFile");
const fs = require("fs");
const path = require("path");

const createStudent = async (studentData, fileName) => {
  try {
    const allInfo = await readSync("student.json");
    console.log("day la studentData", studentData);
    allInfo.push(studentData);
    const saveInfo = JSON.stringify(allInfo);
    console.log("day la newData", saveInfo);
    fs.promises.writeFile(
      path.resolve(__dirname, `../database/${fileName}`),
      saveInfo
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = createStudent;
