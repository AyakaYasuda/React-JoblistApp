import React, { useState, useEffect } from 'react';
import JobSearch from './JobSearch';
import JobFilter from './JobFilter';
import JobList from './JobList';
import JobButton from './JobButton';

const Job = props => {
  // Get jobs filtered by contract and location
  const [filteredContract, setFilteredContract] = useState('All');
  const [filteredLocation, setFilteredLocation] = useState('All');

  const contractChangeHandler = selectedContract => {
    setFilteredContract(selectedContract);
  };
  const locationChangeHandler = selectedLocation => {
    setFilteredLocation(selectedLocation);
  };

  // Make a filtered job list to pass to the JobList
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

  const [newJobList, setNewJobList] = useState(props.jobs);
  const jobListChangeHandler = () => {
    if (filteredContract !== 'All' && filteredLocation !== 'All') {
      setNewJobList(jobsFilteredByBoth);
    } else if (filteredContract !== 'All' && filteredLocation === 'All') {
      setNewJobList(jobsFilteredByContract);
    } else if (filteredContract === 'All' && filteredLocation !== 'All') {
      setNewJobList(jobsFilteredByLocation);
    } else {
      setNewJobList(props.jobs);
    }
  };

  return (
    <div>
      <JobSearch jobs={props.jobs} />
      <JobFilter
        selectedContract={filteredContract}
        selectedLocation={filteredLocation}
        onChangeContractFilter={contractChangeHandler}
        onChangeLocationFilter={locationChangeHandler}
      />
      <JobButton onChangeJobList={jobListChangeHandler} />
      <JobList jobs={newJobList} />
    </div>
  );
};

export default Job;
