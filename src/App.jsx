import React, { useState } from 'react';
import Job from './components/Jobs/Job';
import JsonData from './data.json';
import './App.scss';

const initialData = JsonData.map(data => {
  return {
    id: data.id,
    company: data.company,
    logo: data.logo,
    new: data.new,
    featured: data.featured,
    position: data.position,
    role: data.role,
    level: data.level,
    postedAt: data.postedAt,
    contract: data.contract,
    location: data.location,
    languages: data.languages,
    tools: data.tools,
  };
});
console.log(initialData);

const App = () => {
  const [jobsList, setJobsList] = useState(initialData);

  return (
    <div className='App'>
      <header className='header'>
        <img
          src='./images/bg-header-desktop.svg'
          alt='header'
          className='header--bg-img'
        />
      </header>
      <Job jobs={jobsList} />
    </div>
  );
};

export default App;
