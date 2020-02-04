import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classes from './Form.module.scss';

const Form = props => {
  const { registerUser, isAuthenticated, error } = props;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = data => {
    registerUser(data);
  };

  const intialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div>
          <label htmlFor='first_name'>First Name</label>
          <input
            defaultValue={intialValues.firstName}
            name='first_name'
            placeholder='First Name'
            ref={register({ required: true })}
          />
        </div>
        {errors.firstName && (
          <p className={classes.error}>First name required !</p>
        )}

        <div>
          <label htmlFor='last_name'>Last Name</label>
          <input
            defaultValue={intialValues.lastName}
            name='last_name'
            placeholder='Last Name'
            ref={register({ required: true })}
          />
        </div>
        {errors.lastName && (
          <p className={classes.error}>Last name required !</p>
        )}

        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            placeholder='email@mail.com'
            type='text'
            ref={register({
              required: 'This is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address'
              }
            })}
          />
        </div>
        {errors.email && <p>{errors.email.message}</p>}

        <div>
          <label htmlFor='password'>Password</label>
          <input
            defaultValue={intialValues.password}
            name='password'
            type='password'
            placeholder='password'
            ref={register({ required: true, minLength: 5 })}
          />
        </div>
        {errors.password && (
          <p className={classes.error}>
            Password should be more then 5 characters
          </p>
        )}

        <div>
          <label htmlFor='password2'>Confirm password</label>
          <input
            name='password2'
            type='password'
            placeholder='Confirm password'
            ref={register({
              validate: value => value === watch('password')
            })}
          />
        </div>
        {errors.password2 && (
          <p className={classes.error}>Passwords does not match</p>
        )}

        {error && <p className={classes.error}>User EXIST! Please login!</p>}

        <input type='submit' />
      </form>
    </div>
  );
};

export default Form;
