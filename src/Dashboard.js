import './App.css';
import React from 'react';
import Footer from './Footer'
import Header from './Header'
import WeatherReport from './WeatherReport';

function Dashboard() {
    return(
    <div className="dashboard site-content">
        <Header></Header>
        <WeatherReport></WeatherReport>
        <Footer></Footer>
    </div>)
   }

export default Dashboard