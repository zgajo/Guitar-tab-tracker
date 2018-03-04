const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require("../config/config")
const db = {};


// Creates new database
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

/** 
 * 
 * Reading through models directory and setting all files in directory to use sequelize
 * 
 * */

// Retreiving all files in this folder
let files = fs.readdirSync(__dirname);

// all files except index.js
const allExceptIndex = files.filter((file) => file != "index.js");

// take each file 
allExceptIndex.forEach(file => {
    // importing model from file    
    const model = sequelize.import(path.join(__dirname, file));

    // db.User = model
    db[model.name] = model;
})


Object.keys(db).forEach(modelName => {
    if('associate' in db[modelName]){
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;