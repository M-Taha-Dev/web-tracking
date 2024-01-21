import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
export default function TrackerList({value, SetTrackerType, tracker_list, label}) {
    const handleAutocompleteChange = (event, newValue) => {
        SetTrackerType(newValue.label);
      }
      useEffect(() => {
        // Your refresh logic here
        console.log('Component refreshed due to a change in "data".');
      }, [value]); 
      
  return (
    
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tracker_list}
      value={value}
      onChange={handleAutocompleteChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}