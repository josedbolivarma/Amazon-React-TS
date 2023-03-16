// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
// import CheckoutProduct from '../components/CheckoutProduct';
// import { getCartTotal } from '../selectors/getCartTotal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getAuth, User } from 'firebase/auth';
import { getCartTotal } from '../../../selectors';
import { CheckoutProduct } from '../../components';

import styles from "./Payment.module.scss";

const Payment = () => {

    const [user, setUser] = useState<User | null>(null);
    const { cart } = useSelector((store: any) => store.cart);
    const navigate = useNavigate();


    // const stripe = useStripe();
    // const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // get user from firebase auth
        const auth = getAuth().currentUser;
        setUser(auth);
        
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url:  `./payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async (e: any) => {
        // do all the fancy stripe stuff...
        e.preventDefault();
        // setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent }) => {
        //     // paymentIntent = payment confirmation
        //     setSucceeded(true);
        //     setError(null);
        //     setProcessing(false);
        //     navigate('/orders');
            
        // })
    }

    const handleChange = (e: any) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error? e.error.message : "");
    }

  return (
    <div className={styles.payment}>
        <div className={styles.payment__container}>
            <h1>Checkout ({<Link to="/checkout">{cart?.length} items</Link>})</h1>
            {/* Payment section - delivery address */}
                <div className={styles.payment__section}>
                    <div className={styles.payment__title}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className={styles.payment__address}>
                           <p>{user?.email}</p>
                           <p>123 React Lane</p>
                           <p>Los Angeles, CA</p>
                    </div>
                </div>
            {/* Payment section - Review Items */}
                <div className={styles.payment__section}>
                    <h3>Review items and delivery</h3>

                </div>
                <div className={styles.payment__items}>
                    {/*  */}
                    {cart.map((item: any) => (
                        <CheckoutProduct 
                        id={item.codigo}
                        nombre={item.nombre}
                        image={item.image__front}
                        precio={item.precio}
                        />
                    ))}
                </div>
            {/* Payment section - Payment method */}
            <div className={styles.payment__section}>
                <div className={styles.payment__title}>
                    <h3>Payment Method</h3>
                </div>
                <div className={styles.payment__details}>
                    {/* Stripe magic will go */}
                    <form onSubmit={handleSubmit}>
                        {/* <CardElement 
                        onChange={handleChange}
                        />
                        <div className={styles.payment__priceContainer}>
                            <CurrencyFormat 
                            renderText={(value) => (
                                <>
                                <h3>Order Total: {value}</h3>
                                </>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                             //Part of the homework
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={'$'}
                            /> */}
                            {/* <button disabled={ processing || disabled || succeeded}>
                                <span>
                                    {processing ? <p>Processing</p> : "Buy Now"}
                                </span>
                            </button> */}
                        {/* </div> */}
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment