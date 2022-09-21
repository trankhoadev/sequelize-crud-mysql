/* GET ALL DATA FROM TABLE IN MYSQL */
const { Sequelize, DataTypes, where } = require('sequelize')
const sequelize = require('../db/connectDB');
const Book = require('../model/book');

sequelize.sync().then(res => {
    Book.findAll().then(res => {
        console.log(res)
    }).catch(err => {
        console.error('Failed to get data from table: ', err);
    })
}).catch(err => {
    console.error('Have error when create table: ' + err);
})


/* GET DATA WITH QUERY */
sequelize.sync().then(res => {
    Book.findOne({
        where: {
            id: '1'
        }
    }).then(res => {
        res === null ? console.log('Cannot find data suitable with your query !') : console.log(res);
    }).catch(err => {
        console.error('Failed to get data from table: ', err);
    })
}).catch(err => {
    console.error('Have error when create table: ' + err);
})

/* DELETE DATA */
sequelize.sync().then(res => {
    Book.destroy({
        where: {
            id: '1'
        }
    }).then(res => {
        res === null ? console.log('Cannot find the table ID!') : console.log('Delete successfully: ', res);
    }).catch(err => {
        console.error('Failed to delete data in table: ', err);
    })
}).catch(err => {
    console.error('Have error when create table: ' + err);
})