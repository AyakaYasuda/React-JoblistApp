import React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const JobSearch = props => {
  // 1) Get tag data and store it in a single array
  const rollArr = Array.from(new Set(props.jobs.map(job => job.role)));
  const levelArr = Array.from(new Set(props.jobs.map(job => job.level)));

  const languages = [];
  const langData = props.jobs.map(job => job.languages);
  for (let i = 0; i < langData.length; i++) {
    for (let j = 0; j < langData[i].length; j++) {
      languages.push(langData[i][j]);
    }
  }
  const langArr = Array.from(new Set(languages));

  const tools = [];
  const toolData = props.jobs.map(job => job.tools);
  for (let i = 0; i < toolData.length; i++) {
    for (let j = 0; j < toolData[i].length; j++) {
      tools.push(toolData[i][j]);
    }
  }
  const toolArr = Array.from(new Set(tools));

  const optionsArr = Array.from(
    new Set([...rollArr, ...levelArr, ...langArr, ...toolArr])
  );
//   optionsArr.unshift('Sample');

  // 2) Set the options data in the autocomplete search box
  const fixedOptions = [optionsArr[0]];
  const [selected, setSelected] = React.useState([
    ...fixedOptions,
    optionsArr[1],
  ]);

  return (
    <Autocomplete
      multiple
      id='fixed-tags-demo'
      selected={selected}
      onChange={(event, newValue) => {
        setSelected([
          ...fixedOptions,
          ...newValue.filter(option => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={optionsArr}
      getOptionLabel={option => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={params => (
        <TextField
          {...params}
          label='Search Jobs by Key Words'
          placeholder='role, level, languages, tools...'
        />
      )}
    />
  );
};

export default JobSearch;
