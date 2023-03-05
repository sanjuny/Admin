const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: process.env.DIALECT,
        host: process.env.HOST,
    }
);

sequelize.authenticate().then(() => {
    console.log("connected to mysql database");
})
    .catch((error) => {
    console.log(error,"error");
    })

const db = {}
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.employeedata = require("./EmployeeModel")(sequelize, DataTypes)
db.descriptiondata = require("./DepartmentModel")(sequelize,DataTypes)

db.sequelize.sync({ force: false }).then(() => {});

module.exports = db;