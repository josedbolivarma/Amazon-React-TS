import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useForm } from '../Hooks/useForm';
// import {  loginWithEmailPassAsync } from '../redux/actions/actionLogin';
// import { loginGoogle } from '../redux/actions/actionLogin';
import googleIcon from '../../../assets/google.png';
import facebookIcon from '../../../assets/facebook.png';
import { useForm } from '../../../hooks';
import { loginWithEmailPassAsync, loginGoogle } from '../../../redux/actions/actionLogin';

import styles from "./Login.module.scss";


export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
      email: '',
      password: '',
  })

  const { email, password } = values;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(loginWithEmailPassAsync(email, password));
    reset();
    navigate('/');
  }

  const handleGoogle = () => {
      dispatch<any>(loginGoogle());
      navigate('/');
  }

  return (
    <div className={styles.root}>
        <Link to='/'>
        <img 
        className={styles.login__logo}
        src='https://topeuniversity.com/wp-content/uploads/2021/12/amazon-gran.png'
        alt='Logo'
        />
        </Link>

        <div className={styles.login__container}>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <h5>E-mail</h5>
                <input type='email'
                name='email' 
                value={email}
                placeholder="Enter email"
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={styles.login__signInButton}>Sign In</button>

            <button 
                className={styles.button__google}
                type='button'
                onClick={handleGoogle}
                >
                    <img width='20px' height='20px' src={googleIcon} alt='Google Icon'/>
                    Sign with Google</button>
                   
                   <button 
                    className={styles.button__facebook}
                    type='button'
                    onClick={handleGoogle}
                    >
                    <img width='20px' height='20px' src={facebookIcon} alt='Facebook Icon'/>
                    Sign with Facebook</button>
            </form>
            
            <p>
                AMAZON CLONE Conditions of Use and Terms.
            </p>
            <Link to='/register'>
                Register
            </Link>

         
        </div>
    </div>
  )
}