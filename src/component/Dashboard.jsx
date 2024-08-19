import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import './dash.css'

function App() {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [filters, setFilters] = useState({
    end_year: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mernbackend-pmwy.onrender.com');
        if (Array.isArray(response.data)) {
          setData(response.data);
          setFilteredData(response.data); // Set initial filtered data
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [filters, data]); // Run filterData when filters or data change

  const filterData = () => {
    let filtered = data;

    if (filters.end_year) {
      filtered = filtered.filter(item => item.end_year === filters.end_year);
    }
    if (filters.topic) filtered = filtered.filter(item => item.topic.includes(filters.topic));
    if (filters.sector) filtered = filtered.filter(item => item.sector === filters.sector);
    if (filters.region) filtered = filtered.filter(item => item.region === filters.region);
    if (filters.pestle) filtered = filtered.filter(item => item.pestle === filters.pestle);
    if (filters.source) filtered = filtered.filter(item => item.source === filters.source);
    if (filters.country) filtered = filtered.filter(item => item.country === filters.country);
    if (filters.city) filtered = filtered.filter(item => item.city === filters.city);

    setFilteredData(filtered);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const chartData = {
    labels: filteredData.map(item => item.country),
    datasets: [{
      label: 'Intensity',
      data: filteredData.map(item => item.intensity),
      backgroundColor:["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF9", "#FFDB33", "#B833FF", "#FF8333", "#33FF8F", "#FF3333"]
      ,
      borderWidth: 2,
    }]
  };

  const chartLikelihood = {
    labels: filteredData.map(item => item.end_year),
    datasets: [{
      label: 'Likelihood',
      data: filteredData.map(item => item.likelihood),
      backgroundColor: ['red','blue','black']
      ,
      borderWidth: 2,
    }]
  };

  const relevanceChart = {
    labels: filteredData.map(item => item.country),
    datasets: [{
      label: 'Relevance',
      data: filteredData.map(item => item.relevance),
      backgroundColor: ['black','red']
      ,
      borderWidth: 2,
    }]
  };

  return (
    <div className="App">
      <div className="Inputbar">
        <h2>Filters</h2>
        <div className="inputfiled">
        <input name="end_year" placeholder="End Year" onChange={handleFilterChange} />
        <input name="topic" placeholder="Topic" onChange={handleFilterChange} />
        <input name="sector" placeholder="Sector" onChange={handleFilterChange} />
        <input name="region" placeholder="Region" onChange={handleFilterChange} />
        <input name="pestle" placeholder="PESTLE" onChange={handleFilterChange} />
        <input name="source" placeholder="Source" onChange={handleFilterChange} />
        <input name="country" placeholder="Country" onChange={handleFilterChange} />
        <input name="city" placeholder="City" onChange={handleFilterChange} />
        </div>
      </div>
      <div className="content">
        <h2>Data Visualization Dashboard</h2>
        <div className="chart-container">
          <Bar data={chartData} />
         
        </div>
        <hr />
        <div className="chart-container">
          <Line data={chartLikelihood} />
        </div>
       <hr />
        <div className="chart-container">
          <Line data={relevanceChart} />
        </div>
      </div>
    </div>
  );
}

export default App;
