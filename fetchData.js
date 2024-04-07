// fetchData.js

const { sequelize, MyData } = require('./models');

async function fetchDataFromDatabase() {
  try {
    console.log('Connecting to the database...');
    // Authenticate with the database
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    console.log('Fetching data from the database...');
    // Fetch data from the database
    const data = await MyData.findAll();
    
    console.log('Data fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to handle it in the calling function or middleware
  } finally {
    try {
      console.log('Closing database connection...');
      // Close the database connection
      await sequelize.close();
      console.log('Database connection closed.');
    } catch (error) {
      console.error('Error closing database connection:', error);
      throw error; // Throw the error to handle it in the calling function or middleware
    }
  }
}

module.exports = fetchDataFromDatabase;
