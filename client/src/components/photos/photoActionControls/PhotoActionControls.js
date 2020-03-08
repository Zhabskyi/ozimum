import React from 'react';
import classes from './PhotoActionControls.module.scss';
import Button from '../../button/Button';
import { findKeyName } from '../../../helpers/helperFunctions';

const PhotoActionControls = ({ downloadFree, photo }) => {
  let key;
  if (photo) {
    key = findKeyName(photo);
  }

  return (
    <>
      <Button onClick={() => downloadFree(key)} download>
        Download for Free
      </Button>
      <Button>
        <div className={classes.message}>Add to basket</div>
        <svg className={classes.cart}>
          <g>
            <path
              d='M7.2031765,13.2391405c-0.7604618,0-1.3768821,0.6164532-1.3768821,1.3768816
		c0,0.7604618,0.6164203,1.3769484,1.3768821,1.3769484s1.3769474-0.6164865,1.3769474-1.3769484
		C8.5801239,13.8555937,7.9636383,13.2391405,7.2031765,13.2391405z'
            ></path>
            <path
              d='M15.9432735,13.2391405c-0.7604618,0-1.3768816,0.6164532-1.3768816,1.3768816
		c0,0.7604618,0.6164198,1.3769484,1.3768816,1.3769484s1.3769474-0.6164865,1.3769474-1.3769484
		C17.3202209,13.8555937,16.7037354,13.2391405,15.9432735,13.2391405z'
            ></path>
            <polygon
              points='6.3367653,9.9361572 17.3945694,9.9361572 19.083334,3.0468295 4.5916176,3.0468295 3.8198137,0 0,0 0,1.8798136 
		2.3567166,1.8798136 5.0947456,12.6887417 18.227478,12.6887417 18.227478,10.8089275 6.5578427,10.8089275 	'
            ></polygon>
          </g>
        </svg>
      </Button>
    </>
  );
};

export default PhotoActionControls;
