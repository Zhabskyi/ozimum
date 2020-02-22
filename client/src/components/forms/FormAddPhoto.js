import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import classes from './Form.module.scss';

const FormAddPhoto = props => {

  const [file, setFile] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {

    let newData = new FormData();
    Object.keys(data).forEach(key => newData.append(key, data[key]));

    newData.append('file', file);
    props.addItem(newData); 
  };


  const handleSelectedFile = e => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const intialValues = {
    title: '',
    description: '',
    daily_rate: null,
    deposit: null,
    file: null
  };

  return (
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        encType='multipart/form-data'
      >
        <div className={classes.input}>
          <div className={classes.inputBox}>
            <label htmlFor='title'>Title</label>
            <input
              defaultValue={props.title || intialValues.title}
              name='title'
              placeholder='Title'
              ref={register({ required: true, minLength: 3 })}
            />
          </div>
          {errors.title && (
            <p className={classes.error}>
              Title should be more then 3 characters
            </p>
          )}

          <div className={classes.inputBox}>
            <label htmlFor='description'>Description</label>
            <input
              defaultValue={props.description || intialValues.description}
              name='description'
              placeholder='Description'
              ref={register({ required: true, minLength: 10 })}
            />
          </div>
          {errors.description && (
            <p className={classes.error}>
              Title should be more then 10 characters
            </p>
          )}

          <div className={classes.inputBox}>
            <label>Category</label>
            <select
              name='category'
              ref={register({
                validate: value => value !== ''
              })}
            >
              <option value=''>--Please choose an option--</option>
              <option value='tools'>Tools</option>
              <option value='sports'>Sports Equipment</option>
              <option value='electronics'>Electronics</option>
            </select>
          </div>
          {errors.category && (
            <p className={classes.error}>Please select the category!</p>
          )}

          <div className={classes.file_container}>
            <span className={classes.file_container_name}>{file?.name}</span>
            <input
              id='file'
              type='file'
              accept='image/png, image/jpeg'
              defaultValue={intialValues.file}
              name='files'
              onChange={handleSelectedFile}
              placeholder=''
              ref={register({ required: true })}
            />
            <label htmlFor='file' className={classes.btn_3}>
              Upload Image
            </label>
          </div>
          {errors.files && (
            <p className={classes.error}>Upload picture required</p>
          )}

          <div className={classes.inputBox}>
            <input type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAddPhoto;
