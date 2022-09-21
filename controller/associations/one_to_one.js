/* Import sequelize config from file config database */
const sequelize = require('../../db/connectDB');
/* Add model */
const { Student, student_data } = require('../../model/student');
const { Grade, grade_data } = require('../../model/grade'); 

/* ADD ACCOCIATION */
Student.belongsTo(Grade);

/* ADD DATA TO TABLE */
sequelize
  .sync({ force: true })
  .then(() => {
    Grade.bulkCreate(grade_data, { validate: true })
      .then(() => {
        Student.bulkCreate(student_data, { validate: true })
          .then(() => {
            console.log("ADD DATA SUCCESSFULLY !");
            Student.findAll().then((res) => {
              console.log(res);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    console.error("Unable to create the table : ", error);
  });


