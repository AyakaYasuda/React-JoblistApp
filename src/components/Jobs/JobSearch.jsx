import React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const JobSearch = props => {
  const selected = [];

  return (
    <Autocomplete
      multiple
      id='fixed-tags-demo'
      selected={selected}
      onChange={(event, newValue) => {
        props.onChangeSelectedTags([...newValue]);
      }}
      options={props.options}
      getOptionLabel={option => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            // disabled={fixedOptions.indexOf(option) !== -1}
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
