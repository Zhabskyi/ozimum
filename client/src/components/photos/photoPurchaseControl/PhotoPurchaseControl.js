import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/button/Button';
import './PhotoPurchaseControl.css';
import { findKeyName } from '../../../helpers/helperFunctions';

const PhotoPurchaseControl = ({ photo, downloadFree }) => {

  let key;
  if (photo) {
    key = findKeyName(photo.photo);
  }

  const download = () => {
    if (checkedCategory === 'Small') {
      downloadFree(key);
    } else if (checkedCategory === 'Large') {
      //downloadStripe();
    }
  };

  const [checkedCategory, setCategory] = useState('Small');

  const price = (
    <>
      {checkedCategory === 'Small' ? (
        'FREE'
      ) : (
        <>
          &#36; <span>5.00</span>
        </>
      )}
    </>
  );
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
              <span className='selection_item_details_size'>
                Large
                <span className='selection_item_details_description'>
                  6000 x 4000 300dpi | 15MB
                </span>
              </span>
            </label>
          </section>
          <div className='selection_item_price'>
            &#36; <span>5.00</span>
          </div>
        </div>
      </div>
      <div className='purchase_price_final'>{price}</div>
      <div className='purchase_buttons'>
        <Button onClick={() => download()} confirm>GET THIS IMAGE FOR {price}</Button>
        <Button basket>ADD TO BASKET</Button>
      </div>
    </>
  );
};

export default withRouter(PhotoPurchaseControl);
