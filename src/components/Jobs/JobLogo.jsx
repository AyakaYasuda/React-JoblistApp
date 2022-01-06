import React from 'react';

const JobLogo = props => {
  return (
    <div>
      <img src={props.logo} alt={props.company} />
    </div>
  );
};

export default JobLogo;
