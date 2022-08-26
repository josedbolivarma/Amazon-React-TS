import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.scss';
import { useState } from 'react';
import { Navbar, Sidebar } from '../';
import { useSelector } from 'react-redux';

export const Header = () => {

  const [ user, setUser ] = useState('');

  const { cart } = useSelector( ( store: any ) => store.cart );

  const handleLogout = () => {

  }

  return (
    <header>
    <div className={styles.header__container}>
      
      <Link to='/'>
        <img 
        className={styles.logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'/>
      </Link>

      <Link 
      to={'/map'}
      // state={ state }
      >
            <div className={styles.header__option}>
            <span
                className={styles.header__optionLineOne}
                >
                    Hola
                </span>
                <span
                className={styles.header__optionLineTwo}
                >
                  <FaMapMarkerAlt />
                    Elige tu dirección
                </span>
            </div>
            </Link>

        <div
        className={styles.header__search}
        >
            <input 
            className={styles.header__searchInput}
            type='text'
            />
            <FaSearch
            className={styles.header__searchIcon}/>
        </div>

        {/* NAVBAR RESPONSIVE */}
        <div
        className={styles.header__nav}
        >
          {/* /login */}
          <Link to='/login'>
          <div
          onClick={ handleLogout } 
          className={styles.header__option}>
                <span
                className={styles.header__optionLineOne}
                >
                  Hello Guest
                    {/* Hello {!user ? 'Guest' : user.email } */}
                </span>
                <span
                className={styles.header__optionLineTwo}
                >
                    { user? 'Sign Out' : 'Sign In'}
                </span>
            </div>
          </Link>
          {/* /login */}

          {/* /products */}
          <Link to='/products'>
          <div className={styles.header__option}>
            <span
                className={styles.header__optionLineOne}
                >
                    Devoluciones
                </span>
                <span
                className={styles.header__optionLineTwo}
                >
                    Y Pedidos
                </span>
            </div>
            </Link>
            {/* /products */}
            
            {/* /order */}
            <Link to='/order'>
            <div className={styles.header__option}>
            <span
                className={styles.header__optionLineOne}
                >
                    Your
                </span>
                <span
                className={styles.header__optionLineTwo}
                >
                    Prime
                </span>
            </div>
            </Link>
            {/* YOUR PRIME */}
              {/* /checkout */}
               <Link to='/cart'>
            <div className={styles.header__optionBasket}>
                <FaShoppingCart />
                <span
                className={styles.header__basketCount}
                >
                    { cart.length }
                </span>
            </div>
                </Link>
            {/* /checkout */}
        </div>
        {/* NAVBAR RESPONSIVE */}
        <div>
        </div>
    </div>
    <Navbar />
    <Sidebar />
  </header>
  )
}
