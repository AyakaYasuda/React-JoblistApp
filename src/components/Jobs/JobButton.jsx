import React from 'react';

const JobButton = props => {
  const jobListChangeHandler = () => {
    props.onChangeJobList();
  };

  return <button onClick={jobListChangeHandler}>Search!</button>;
};

export default JobButton;
