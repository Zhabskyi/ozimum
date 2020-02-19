import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classes from './Form.module.scss';

const Form = props => {
  const { login, isAuthenticated } = props;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    login(data);
  };

  const intialValues = {
    email: '',
    password: ''
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <h2>Login</h2>
        <div className={classes.input}>
          <div className={classes.inputBox}>
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

          <div className={classes.inputBox}>
            <label htmlFor='password'>Password</label>
            <input
              defaultValue={intialValues.password}
              name='password'
              placeholder='password'
              type='password'
              ref={register({ required: true, minLength: 5 })}
            />
          </div>
          {errors.password && (
            <p className={classes.error}>
              Password should be more then 5 characters
            </p>
          )}

          <div className={classes.inputBox}>
            <input type='submit' value='Sign In' />
          </div>
          <p className={classes.forget}>
            Forget password ?{' '}
            <Link className={classes.forget_link}>Click Here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
