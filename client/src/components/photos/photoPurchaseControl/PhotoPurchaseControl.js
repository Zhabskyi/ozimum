import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/button/Button';
import './PhotoPurchaseControl.css';

const PhotoPurchaseControl = props => {
  const [checkedCategory, setCategory] = useState('Small');
  return (
    <>
      <p className='purchase'>PURCHASE THE PHOTO</p>
      <div className='selection'>
        <div className='selection_item'>
          <section className='selection_item_details'>
            <label htmlFor='tab_purchase_free' className='purchase_label'>
              <input
                id='tab_purchase_free'
                type='radio'
                value='Small'
                checked={checkedCategory === 'Small'}
                className='tab_purchase'
                onChange={e => {
                  setCategory(e.target.value);
                }}
              />
              <span className='design'></span>
              <span>Small</span>
            </label>
          </section>
          <div className='selection_item_price'>FREE</div>
        </div>
        <div className='selection_item'>
          <section className='selection_item_details'>
            <label htmlFor='tab_purchase_pay' className='purchase_label'>
              <input
                id='tab_purchase_pay'
                type='radio'
                value='Large'
                className='tab_purchase'
                checked={checkedCategory === 'Large'}
                onChange={e => {
                  setCategory(e.target.value);
                }}
              />
              <span className='design'></span>
              <span>Large</span>
            </label>
          </section>
          <div className='selection_item_price'>
            &#36; <span>5.00</span>
          </div>
        </div>
      </div>
      <div className='purchase_price_final'>
        {checkedCategory === 'Small' ? (
          'FREE'
        ) : (
          <>
            &#36; <span>5.00</span>
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(PhotoPurchaseControl);
