const {Sequelize, DataTypes} = require('sequelize')
const config = require('../config/config')

const sequelize = new Sequelize(
    config.db.database,
    config.db.userName,
    config.db.passWord,
    {
        host: config.db.host,
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(() => {
    console.log('Connect to database successfully !');
}).catch((err) => {
    console.error('Cannot connect to database !', err);
})

module.exports = sequelize;


