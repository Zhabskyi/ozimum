import React from 'react';
import './Filter.css';

const Filter = props => {
  return (
    <div className='tabs'>
      <div className='tab_2'>
        <label
          style={
            props.checkedCategory === 'all'
              ? { backgroundColor: '#27a1a1' }
              : null
          }
          htmlFor='tab2-1'
        >
          All
        </label>
        <input
          className='radio-input'
          type='radio'
          value='all'
          id='tab2-1'
          checked='checked'
          onChange={e => {
            props.onFilter(e.target.value);
          }}
        />
      </div>
      <div className='tab_2'>
        <label
          htmlFor='tab2-2'
          style={
            props.checkedCategory === 'calgary'
              ? { backgroundColor: '#27a1a1' }
              : null
          }
        >
          Calgary
        </label>
        <input
          className='radio-input'
          type='radio'
          value='calgary'
          id='tab2-2'
          checked={props.checkedCategory === 'calgary'}
          onChange={e => {
            props.onFilter(e.target.value);
          }}
        />
      </div>
      <div className='tab_2'>
        <label
          htmlFor='tab2-3'
          style={
            props.checkedCategory === 'oilfield'
              ? { backgroundColor: '#27a1a1' }
              : null
          }
        >
          Oilfield
        </label>
        <input
          className='radio-input'
          type='radio'
          value='oilfield'
          id='tab2-3'
          checked={props.checkedCategory === 'oilfield'}
          onChange={e => {
            props.onFilter(e.target.value);
          }}
        />
      </div>
      <div className='tab_2'>
        <label
          htmlFor='tab2-4'
          style={
            props.checkedCategory === 'nature'
              ? { backgroundColor: '#27a1a1' }
              : null
          }
        >
          Nature
        </label>
        <input
          className='radio-input'
          type='radio'
          value='nature'
          id='tab2-4'
          checked={props.checkedCategory === 'nature'}
          onChange={e => {
            props.onFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
