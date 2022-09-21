require("dotenv").config();

const userName = "root";
const passWord = "";
const database = "db-crud-with-sequelize";
const host = "localhost";
const node_env = "dev";

const config = {
  dev: {
    db: {
      userName,
      passWord,
      database,
      host,
    },
  },
  test: {},
  prod: {},
};

module.exports = config[node_env];
