import './App.css';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment'
import {getClosestAsteroids} from './services/asteroidsService'
import Layout from './layout/Layout';
import DateRange from './components/DateRange/DateRange';
import TabsPanel from './components/TabsPanel/TabsPanel';
import Header from './components/Header/Header';
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const getStartDate = (date) => {
    setStartDate(date);
  };
  const getEndDate = (date) => {
    setEndDate(date);
  }
  const getAsteroids = (e)=>{
    e.preventDefault();
    console.log(startDate);
  
    const data = {start_date: moment(startDate).format('YYYY-MM-DD'), 
    end_date: moment(endDate).format('YYYY-MM-DD')}
    console.log(data);
    getClosestAsteroids(data);
  }
  return (
    <div className="App">
      <Layout>
        <Header />
        <TabsPanel />
      </Layout>
    </div>
  );
}

export default App;
