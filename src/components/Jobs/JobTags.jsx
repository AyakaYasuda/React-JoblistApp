import React from 'react';

const JobTags = props => {
  const language = props.languages.map(lan => (
    <button key={lan.toString()}>{lan}</button>
  ));
  const tool = props.tools.map(tool => (
    <button key={tool.toString()}>{tool}</button>
  ));

  return (
    <section>
      <button>{props.role}</button>
      <button>{props.level}</button>
      {language}
      {tool}
    </section>
  );
};

export default JobTags;
