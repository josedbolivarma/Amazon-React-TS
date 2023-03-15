import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks';
import { registerAsync } from '../../../redux/actions/actionRegister';


// import { registerAsync } from '../redux/actions/actionRegister';
//Material UI
import styles from "./Register.module.scss";

export const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
      nombre: '',
      email: '',
      pass1: '',
      pass2: ''
  })

  const { nombre, email, pass1, pass2 } = values;

  const handleSubmit = (e: any ) => {
      e.preventDefault();
      console.log('/REGISTER.JS ',values);
      dispatch<any>(registerAsync(email, pass1, nombre));
      reset();
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
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <h5>E-mail</h5>
                <input type='email' 
                name='email'
                value={email}
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='pass1'
                value={pass1}
                onChange={handleInputChange}
                /> 
                  <h5>Repeat Password</h5>
                <input type='password'
                name='pass2'
                value={pass2}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={styles.login__signUpButton}>Sign Up</button>
            </form>
            
            <p>
                AMAZON CLONE Conditions of Use and Terms.
            </p>
            <Link to='/login'>
                Login
            </Link>

         
        </div>
    </div>
  )
}