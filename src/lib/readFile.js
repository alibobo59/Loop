const fs = require("fs");
const path = require("path");

const read = (fileName) => {
  fs.readFile(
    path.resolve(__dirname, `../database/${fileName}`),
    "utf-8",
    (err, re) => {
      if (err) {
        console.log(err);
      }
      console.log(re);
    }
  );
};

const readSync = async (fileName) => {
  try {
    data = await fs.promises.readFile(
      path.resolve(__dirname, `../database/${fileName}`),
      "utf-8"
    );
    return JSON.parse(data);
  } catch (e) {
    return [];
    console.log(e);
  }
};
module.exports = { read, readSync };
