import { useDispatch } from 'react-redux'
import { deleteSyncFromCart } from '../../../redux/actions/actionShoppingCart';

import styles from './CheckoutProduct.module.scss';

interface Props {
    id: string;
    image: string;
    nombre: string;
    precio: number;
}

export const CheckoutProduct = ({ id, image, nombre ,precio }: Props ) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch( deleteSyncFromCart( id ) );
  }

  return (
    <div className={styles.checkoutProduct}>
       <img 
       className={styles.checkoutProduct__image}
       src={image}
       alt='Checkout Product'
       />

       <div className={styles.checkoutProduct__info}>
       <p className={styles.checkoutProduct__title}>
         { nombre }
       </p>
       <p className={styles.checkoutProduct__price}>
          <b className='markPrice'>${ precio }</b>
       </p>

       <button 
       className='btnSecondary'
       onClick={removeFromCart}>
        Remove from Cart
       </button>
       </div>
    </div>
  )
}