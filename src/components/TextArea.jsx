import React from 'react';

export const TextArea = ({ props }) => {
  return (
    <>
      <label htmlFor={props.id} className={props.labelClass}>
        {props.label}
      </label>
      <textarea
        name={props.id}
        id={props.id}
        className={props.textAreaClass}
        style={{ resize: 'none ' }}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}></textarea>
    </>
  );
};
