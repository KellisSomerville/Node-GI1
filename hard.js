// requires the express and fs. Also created the port
const express = require("express");
const app = express();
const fs = require ("fs");
const port = 4000;

const employeeData = JSON.parse(fs.readFileSync("employees.json", "utf8")); // reads the info from the json file

app.get("/employees/:id", (req, res) => {
  // creates an endpoint to find an employee using their ID

  const employeeInfo = parseInt(req.params.id);

  const employee = employeeData.employees.find(
    (emp) => emp.id === employeeInfo
  ); // finds the employee with their ID

  if (!employee) {
    return res.status(404).json({ error: "Employee not found." }); // gives an error if the employee isn't present in the json
  }
  res.json(employee); // returns the details of the specific employee
});

// setting up the app to be listened at port 4000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
