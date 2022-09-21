const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connectDB");

/* DEFINE TABLE IN MYSQL */
const Grade = sequelize.define("grades", {
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

/* ARRAY HAVE DATA OF 2 TABLE ABOVE */
const grade_data = [{ grade: 9 }, { grade: 10 }, { grade: 11 }];

module.exports = {
  Grade,
  grade_data,
};
