import React, { useState, useEffect } from 'react';
import fetchDataFromDatabase from './fetchData'; // Import fetchDataFromDatabase function
import './Dashboard.css';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchDataFromDatabase();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1>Data Visualization Dashboard</h1>
      </header>
      <div className="data-display">
        <h2>Data Display Area</h2>
        <table>
          <thead>
            <tr>
              <th>End Year</th>
              <th>Intensity</th>
              <th>Sector</th>
              <th>Topic</th>
              <th>Insight</th>
              <th>Region</th>
              <th>Country</th>
              <th>Relevance</th>
              <th>Pestle</th>
              <th>Source</th>
              <th>Title</th>
              <th>Likelihood</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.end_year}</td>
                <td>{item.intensity}</td>
                <td>{item.sector}</td>
                <td>{item.topic}</td>
                <td>{item.insight}</td>
                <td>{item.region}</td>
                <td>{item.country}</td>
                <td>{item.relevance}</td>
                <td>{item.pestle}</td>
                <td>{item.source}</td>
                <td>{item.title}</td>
                <td>{item.likelihood}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
