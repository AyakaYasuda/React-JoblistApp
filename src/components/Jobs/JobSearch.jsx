import React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './JobSearch.scss';

const JobSearch = props => {
  const selected = [];

  return (
    <div className='searchbox-container'>
      <Autocomplete
        className='searchbox'
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
        // style={{ width: 400 }}
        renderInput={params => (
          <TextField
            {...params}
            label='Search Jobs by Key Words'
            placeholder='role, level, languages, tools...'
          />
        )}
      />
    </div>
  );
};

export default JobSearch;
