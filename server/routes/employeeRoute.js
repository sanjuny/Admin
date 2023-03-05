const express = require("express");
const router = express.Router()
const { addEmployee, getEmployee, getEmployeeCount } = require("../controllers/employeeController");

router.post("/addEmployee", addEmployee);

router.get("/getemployees",getEmployee);

router.get("/getemployeecount",getEmployeeCount);

module.exports = router;