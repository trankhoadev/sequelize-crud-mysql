const { DataTypes } = require("sequelize");
const sequelize = require("../db/connectDB");

/* DEFINE TABLE IN MYSQL */
const Student = sequelize.define("students", {
  student_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

/* ARRAY HAVE DATA OF 2 TABLE ABOVE */
const student_data = [
  { name: "Tran Van A", gradeId: 2 },
  { name: "Tran Van B", gradeId: 1 },
  { name: "Tran Van C", gradeId: 3 },
  { name: "Tran Van D", gradeId: 2 },
  { name: "Tran Van E", gradeId: 1 },
];

module.exports = {
  Student,
  student_data,
};
