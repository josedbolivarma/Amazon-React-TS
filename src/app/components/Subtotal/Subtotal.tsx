import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import styles from './Subtotal.module.scss';

import CurrencyFormat from 'react-currency-format';

import { getCartTotal } from '../../../selectors';

export const Subtotal = () => {

  const navigate = useNavigate();
  const { cart } = useSelector( ( store: any ) => store.cart);

  return (
    <div className={styles.subtotal}>
        <CurrencyFormat
        renderText={( value: string ) => (
            <>
              <p>
                  Subtotal ({ cart.length } items): <strong>{ value }</strong>
              </p>  
              <small className={ styles.subtotal__gift }>
                    <input 
                    type='checkbox'
                    />
                    This order contains a gift
              </small>
            </>
        )}
        decimalScale={2}
        value={ getCartTotal( cart )} // Calculate total cart
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />

        <button 
        className='btnSecondary'
        onClick={e => navigate('/payment')}>
            Proceed to Checkout
        </button>
    </div>
  )
}