// server.js

const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// Database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Datadb",
  password: "yashdb007",
  port: 5432,
});

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Data Visualization Dashboard Backend');
});

// API endpoint to fetch data
app.get('/data', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM MyData');
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
