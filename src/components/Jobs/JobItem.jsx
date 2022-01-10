import React from 'react';
import JobLogo from './JobLogo';
import JobTags from './JobTags';
import Card from '../UI/Card';
import './JobItem.scss';

const JobItem = props => {
  return (
    <Card className='job-item'>
      <JobLogo logo={props.logo} company={props.company} />
      <div className='job-bio'>
        <div className='job-bio__row1'>
          <p>{props.company}</p>
          {props.new ? <button id='new'>new!</button> : ''}
          {props.featured ? <button id='featured'>featured</button> : ''}
        </div>
        <h2 className='job-bio__row2'>{props.position}</h2>
        <div className='job-bio__row3'>
          <p>{props.postedAt}</p>
          <p>{props.contract}</p>
          <p>{props.location}</p>
        </div>
      </div>
      <JobTags
        role={props.role}
        level={props.level}
        languages={props.languages}
        tools={props.tools}
      />
    </Card>
  );
};

export default JobItem;
