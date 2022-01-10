import React from 'react';

const JobLogo = props => {
  return (
    <div className='job-logo'>
      <img src={props.logo} alt={props.company} className='job-logo__img'/>
    </div>
  );
};

export default JobLogo;
