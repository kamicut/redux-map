import React from 'react';
const Picker = ({value, onChange, options}) => (
  <span id="picker">
    <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(
        option =>
        <option value={option} key={option}>
          {option}
        </option>
        )}
      </select>
    </span>
);
export default Picker;
