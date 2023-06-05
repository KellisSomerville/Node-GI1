const fs = require("fs"); // requires file system module

fs.readFile("./planets.txt", "utf8", (err, data) => {
  // readFile method reads the .txt file
  if (err) {
    // if statement ran if an error occurs and if not, the data will be console logged
    throw err;
  }
  console.log(data);
});
