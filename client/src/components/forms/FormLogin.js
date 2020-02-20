import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classes from './Form.module.scss';
import FormHeader from './formHeader/FormHeader';

const Form = props => {
  const { login, isAuthenticated, isAdmin, error } = props;

  useEffect(() => {
    if (isAuthenticated && !isAdmin) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  useEffect(() => {
    if (isAdmin) {
      props.history.push('/admin');
    }
  }, [isAdmin, props.history]);

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
        <FormHeader />
        <div className={classes.input}>
          <div className={classes.inputBox}>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              placeholder='email@mail.com'
              type='email'
              autoComplete='email'
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
              autoComplete='password'
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
            <Link className={classes.forget_link} to='/basket'>
              Click Here
            </Link>
          </p>
          <p>{error ? error : null}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
