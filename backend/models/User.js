const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(UserModel === sequelize.models.UserModel); // true

module.exports = UserModel;