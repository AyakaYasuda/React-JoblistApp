import React, { useState } from 'react';
import JobList from './components/Jobs/JobList';
import JsonData from './data.json';

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
    <div>
      <JobList jobs={jobsList} />
    </div>
  );
};

export default App;
