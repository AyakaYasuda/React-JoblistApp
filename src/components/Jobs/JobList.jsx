import React, { useState } from 'react';
import JobItem from './JobItem';

const JobList = props => {
  return (
    <div>
      {props.jobs.map(job => (
        <JobItem
          key={job.id}
          company={job.company}
          logo={job.logo}
          new={job.new}
          featured={job.featured}
          position={job.position}
          role={job.role}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </div>
  );
};

export default JobList;
