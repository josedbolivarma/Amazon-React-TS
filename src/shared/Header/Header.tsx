import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import { Navbar, Sidebar } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, User } from 'firebase/auth';
import { logoutAsync } from '../../redux/actions/actionLogin';

export const Header = () => {

  const [ user, setUser ] = useState<User | null>(null);

  const { cart } = useSelector( ( store: any ) => store.cart );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  const handleLogout = () => {
    dispatch<any>(logoutAsync());
    navigate('/login');
  }

  return (
    <header>
    <div className={styles.header__container}>
      
      {/* ItemContainer1 */}
      <div className={styles.header__containerOne}>
      <Link to='/'>
        <img 
        className={styles.logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'/>
      </Link>

      {/* Item 2 */}
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
        {/* Item */}

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
      </div>
      {/* ItemContainer1 */}
      
        {/* NAVBAR RESPONSIVE */}
          {/* HeaderContainerTwo */}
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
                  Hello {user?.displayName || user?.email }
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
          {/* HeaderContainerTwo */}
        {/* NAVBAR RESPONSIVE */}

        <div>
        </div>
    </div>
    <Navbar />
    <Sidebar />
  </header>
  )
}
