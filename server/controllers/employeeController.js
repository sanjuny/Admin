const db = require("../models");
const Employee = db.employeedata;

/* --------------------------- creating a employee -------------------------- */

module.exports.addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res
      .status(201)
      .json({ message: "Employee added sucessfully", employee: employee });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

/* ---------------------------- getall employess ---------------------------- */

module.exports.getEmployee = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

/* ------------------------- getall employess count ------------------------- */

module.exports.getEmployeeCount = async (req, res) => {
  try {
    const count = await Employee.count();
    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
