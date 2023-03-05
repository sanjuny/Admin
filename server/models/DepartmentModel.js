module.exports = (sequelize, DataTypes) => {
  const Descriptions = sequelize.define("description", {
    Department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Descriptions;
};
