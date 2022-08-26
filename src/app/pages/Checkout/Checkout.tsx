import { useEffect, useState } from 'react';


import { getAuth } from 'firebase/auth';

import { Subtotal } from '../../components';

import { useSelector } from 'react-redux';
import { CheckoutProduct } from '../../components';

import styles from './Checkout.module.scss';
import { Product } from '../../../interfaces/products';

export const Checkout = () => {
    const [user, setUser] = useState<any>();
    const { cart } = useSelector( ( store: any ) => store.cart);

    useEffect(() => {
      const auth = getAuth().currentUser;
      setUser( auth );
    }, [])
    

  return (
    <div className={styles.root}>
        <div className={styles.checkout__left}>
            <img 
            className={styles.checkout__ad}
            src='https://proteinasencolombia.com/modules/dor_imageslider/images/08b0f586f97039219bfc96977509332e0334d0dc_banner_upn-min.jpg'
            alt='Banner'
            />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your shopping Cart</h2>

                {
                  cart.map(( item: Product, index: number ) => (
                    <CheckoutProduct 
                    key={index}
                    id={ item.codigo! }
                    nombre={item.nombre}
                    image={ item.image__front! }
                    precio={item.precio}
                    />
                  ))
                }
            </div>
        </div>
      <div className={styles.checkout__right}>
      <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;