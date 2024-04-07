// saveData.js

const fs = require('fs');
const { sequelize, MyData } = require('./models');

// Read data from JSON file
console.log('Reading data from JSON file...');
const jsonData = fs.readFileSync(__dirname + '/jsondata.json');
console.log('Data read from JSON file:', jsonData);
const data = JSON.parse(jsonData);
console.log('Data parsed from JSON:', data);

// Function to save data to the database
async function saveDataToDatabase() {
  try {
    console.log('Attempting to authenticate with the database...');
    // Authenticate with the database
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    console.log('Synchronizing model with the database...');
    // Synchronize the model with the database
    await MyData.sync();

    console.log('Saving data to the database...');
    // Save each data entry to the database
    for (const entry of data) {
      await MyData.create(entry);
    }

    console.log('Data saved successfully.');
  } catch (error) {
    console.error('Error saving data:', error);
  } finally {
    console.log('Closing database connection...');
    // Close the database connection
    await sequelize.close();
    console.log('Database connection closed.');
  }
}

// Call the function to save data to the database
saveDataToDatabase();
