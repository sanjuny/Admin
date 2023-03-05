module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Employee;
}

