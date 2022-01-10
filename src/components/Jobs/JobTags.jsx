import React from 'react';
import './JobTags.scss';

const JobTags = props => {
  const language = props.languages.map(lan => (
    <button key={lan.toString()} className='job-tags__btn'>
      {lan}
    </button>
  ));
  const tool = props.tools.map(tool => (
    <button key={tool.toString()} className='job-tags__btn'>
      {tool}
    </button>
  ));

  return (
    <section className='job-tags'>
      <button className='job-tags__btn'>{props.role}</button>
      <button className='job-tags__btn'>{props.level}</button>
      {language}
      {tool}
    </section>
  );
};

export default JobTags;
