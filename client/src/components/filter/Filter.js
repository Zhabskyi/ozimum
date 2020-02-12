import React, { useState, useContext, useEffect } from 'react';
//import classes from './Filter.module.scss';
import './Filter.css';
//import ItemContext from "../../context/Item/ItemContext";

const Filter = props => {
  // const itemContext = useContext(ItemContext);

  // const { getUserByPostal } = itemContext;

  const [postalInput, setPostalInput] = useState('');

  // useEffect(() => {
  //   if (postalInput) {
  //     getUserByPostal(postalInput);
  //   }
  //   // eslint-disable-next-line
  // }, [postalInput]);

  const handleChange = async event => {
    setPostalInput(event.target.value.toUpperCase());
  };

  return (
    <div className='tabs'>
      <div className='tab_2'>
        <label htmlFor='tab2-1'>All</label>
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
        <label htmlFor='tab2-2'>Calgary</label>
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
        <label htmlFor='tab2-3'>Oilfield</label>
        <input
          className='radio-input'
          type='radio'
          value='calgary'
          id='tab2-3'
          checked={props.checkedCategory === 'oilfield'}
          onChange={e => {
            props.onFilter(e.target.value);
          }}
        />
      </div>
      <div className='tab_2'>
        <label htmlFor='tab2-4'>Nature</label>
        <input
          className='radio-input'
          type='radio'
          value='calgary'
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
