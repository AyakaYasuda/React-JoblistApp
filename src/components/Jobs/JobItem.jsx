import React from 'react';
import JobLogo from './JobLogo';
import JobTags from './JobTags';

const JobItem = props => {
  return (
    <div>
      <JobLogo logo={props.logo} company={props.company} />
      <section>
        <p>{props.company}</p>
        {props.new ? <button>new</button> : ''}
        {props.featured ? <button>featured</button> : ''}
        <h2>{props.position}</h2>
        <p>{props.postedAt}</p>
        <p>{props.location}</p>
      </section>
      <JobTags
        role={props.role}
        level={props.level}
        languages={props.languages}
        tools={props.tools}
      />
    </div>
  );
};

export default JobItem;
