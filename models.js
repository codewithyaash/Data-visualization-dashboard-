// models.js

const { Sequelize, DataTypes } = require('sequelize');

console.log('Attempting to initialize Sequelize...');
const sequelize = new Sequelize('Datadb', 'postgres', 'yashdb007', {
  host: 'localhost',
  dialect: 'postgres',
  
});
console.log('Sequelize initialized successfully.');

// Define your database model

// Define your database model
const MyData = sequelize.define('MyData', {
  end_year: DataTypes.STRING,
  intensity: DataTypes.INTEGER,
  sector: DataTypes.STRING,
  topic: DataTypes.STRING,
  insight: DataTypes.STRING,
  url: DataTypes.STRING,
  region: DataTypes.STRING,
  start_year: DataTypes.STRING,
  impact: DataTypes.STRING,
  added: DataTypes.STRING,
  published: DataTypes.STRING,
  country: DataTypes.STRING,
  relevance: DataTypes.INTEGER,
  pestle: DataTypes.STRING,
  source: DataTypes.STRING,
  title: DataTypes.STRING,
  likelihood: DataTypes.INTEGER,
});

module.exports = {
  sequelize,
  MyData,
};
