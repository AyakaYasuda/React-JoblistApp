/*
import React from 'react';

const JobFilter = props => {
  const contractChangeHandler = event => {
    props.onChangeContractFilter(event.target.value);
  };

  const locationChangeHandler = event => {
    props.onChangeLocationFilter(event.target.value);
  };

  return (
    <div className='job-filter'>
      <div className='job-filter__contract'>
        <label>Filter by type of contract</label>
        <select value={props.selectedContract} onChange={contractChangeHandler}>
          <option value='All'>All</option>
          <option value='Full Time'>Full Time</option>
          <option value='Part Time'>Part Time</option>
          <option value='Contract'>Contract</option>
        </select>
      </div>
      <div className='job-filter__location'>
        <label>Filter by type of location</label>
        <select value={props.selectedLocation} onChange={locationChangeHandler}>
          <option value='All'>All</option>
          <option value='USA Only'>USA Only</option>
          <option value='UK Only'>UK Only</option>
          <option value='Worldwide'>Worldwide</option>
          <option value='Remote'>Remote</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilter;
*/