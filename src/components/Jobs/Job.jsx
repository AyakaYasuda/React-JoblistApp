import React, { useState } from 'react';
import JobSearch from './JobSearch';
// import JobFilter from './JobFilter';
import JobList from './JobList';
// import JobSearchButton from './JobSearchButton';

const Job = props => {
  /*
  -------------------------
  Filter
  -------------------------
  // 1) Get jobs filtered by contract and location
  const [filteredContract, setFilteredContract] = useState('All');
  const [filteredLocation, setFilteredLocation] = useState('All');
  
  const contractChangeHandler = selectedContract => {
    setFilteredContract(selectedContract);
  };
  const locationChangeHandler = selectedLocation => {
    setFilteredLocation(selectedLocation);
  };
  
  // 2) Make a filtered job list to pass to the JobList
  const jobsFilteredByContract = props.jobs.filter(job => {
    return job.contract === filteredContract;
  });
  const jobsFilteredByLocation = props.jobs.filter(job => {
    return job.location === filteredLocation;
  });
  const jobsFilteredByBoth = props.jobs.filter(job => {
    return (
      job.contract === filteredContract && job.location === filteredLocation
      );
    });
  */

  /*
    -------------------------
    Search Box
    -------------------------
  */
  // 1) Get tag data and store it in a single array as optionsArr
  const rollArr = Array.from(new Set(props.jobs.map(job => job.role)));
  const levelArr = Array.from(new Set(props.jobs.map(job => job.level)));

  const languages = [];
  const langData = props.jobs.map(job => job.languages);
  for (let i = 0; i < langData.length; i++) {
    for (let j = 0; j < langData[i].length; j++) {
      languages.push(langData[i][j]);
    }
  }
  const langArr = Array.from(new Set(languages));

  const tools = [];
  const toolData = props.jobs.map(job => job.tools);
  for (let i = 0; i < toolData.length; i++) {
    for (let j = 0; j < toolData[i].length; j++) {
      tools.push(toolData[i][j]);
    }
  }
  const toolArr = Array.from(new Set(tools));

  const optionsArr = Array.from(
    new Set([...rollArr, ...levelArr, ...langArr, ...toolArr])
  );

  // 2) Get selected options
  const [selectedTags, setSelectedTags] = useState([]);

  const tagsChangeHandler = tags => {
    setSelectedTags(tags);
  };
  console.log(selectedTags);

  // 3) Make a filtered job list to pass to the JobList
  const filteredJobList = props.jobs.filter(job => {
    let booleanArr = [];
    for (let i = 0; i < selectedTags.length; i++) {
      booleanArr.push(Object.values(job).indexOf(selectedTags[i]) !== -1);
    }
    return !booleanArr.includes(false)
  });

  // 4) Set the new job list filtered by contract and location
  // const [newJobList, setNewJobList] = useState(props.jobs);
  // const jobListChangeHandler = () => {
  //   if (filteredContract !== 'All' && filteredLocation !== 'All') {
  //     setNewJobList(jobsFilteredByBoth);
  //   } else if (filteredContract !== 'All' && filteredLocation === 'All') {
  //     setNewJobList(jobsFilteredByContract);
  //   } else if (filteredContract === 'All' && filteredLocation !== 'All') {
  //     setNewJobList(jobsFilteredByLocation);
  //   } else {
  //     setNewJobList(props.jobs);
  //   }
  // };

  return (
    <div>
      {/* <JobFilter
        selectedContract={filteredContract}
        selectedLocation={filteredLocation}
        onChangeContractFilter={contractChangeHandler}
        onChangeLocationFilter={locationChangeHandler}
      /> */}
      <JobSearch
        options={optionsArr}
        onChangeSelectedTags={tagsChangeHandler}
      />
      {/* <JobSearchButton onChangeJobList={jobListChangeHandler} /> */}
      <JobList jobs={filteredJobList} />
    </div>
  );
};

export default Job;
