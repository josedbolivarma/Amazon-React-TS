import { Link } from 'react-router-dom';

import styles from './DetailsContainer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addSyncToCart } from '../../../redux/actions/actionShoppingCart';

import ReactImageMagnify from 'react-image-magnify';


export const DetailsContainer = () => {

    const { modal } = useSelector( ( store: any ) => store.modal );

    const dispatch = useDispatch();
    const [image, setImage] = useState('');
  
    useEffect(() => {
      setImage( modal.image__front );
    }, [ modal ])
  
    const addToCart = ( productCart:any ) => {
          dispatch( addSyncToCart( productCart ));
    }

  return (
    <div className={ styles.root }>
        <div className={ styles.card__options }>
            <img onMouseEnter={() => setImage(modal.image__front)} className={styles.card__optionImage} src={ modal.image__front } alt='front'/>
            <img onMouseEnter={() => setImage(modal.image__lateral)} className={styles.card__optionImage} src={ modal.image__lateral } alt='lateral'/>
            <img onMouseEnter={() => setImage(modal.image__back)} className={styles.card__optionImage} src={ modal.image__back } alt='back'/>
        </div>
        {/* Card Detail */}
        <div>
            <div className={ styles.card__detail }>
                <ReactImageMagnify className={styles.card__detailImage} {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: image
                                        },
                                        largeImage: {
                                            src: image,
                                            width: 800,
                                            height: 1200
                                        },
                                        
                                    }} />
            </div>
        </div>
        {/* Card Detail */}
        



        
        {/* Card Info */}
        <div className={styles.card__info}>
            <div>
                <h3 className='upperTitle'>{ modal.nombre }</h3>
                {/* <LinkRedirect to='/'>Marca: Canon</LinkRedirect> */}
                <Link className='linkRedirect' to='/'>Marca: Canon</Link>
            </div>
            {/* <TypographyStyled variant='body2' component='h2' className={styles.flexText}> */}
            
            
            <p className={styles.flexText}>
                <span>
                    Precio: 
                </span>
                {/* <MarkPrice>${modal.precio}</MarkPrice> */}
                <b className='markPrice'>${ modal.precio }</b>
                <b>Envio GRATIS.</b>
                <Link className='linkRedirect' to='/'>Detalles</Link>
            </p>


            <p>
                Hasta 
                <b> 18 meses sin intereses </b>
                de $5.592.76.
                <Link className='linkRedirect' to='/'>
                    {' '}Ver Mensualidades
                </Link>
            </p>


            <p>
                <Link className='linkRedirect' to='/'>
                    Solicita tu tarjeta Amazon Recargable {' '}
                </Link>
                y obten $100 de descuento en tu primera compra mayor a $500
            </p>



            <p>
                Precio: <b>Negro</b>
            </p>


            <p>
                Estilo: <b>24-105mm USM Kit</b>
            </p>


            <p style={{
                marginTop: '1.8rem'
            }}>
                <b>Acerca de este artículo</b>
            </p>

            <div className={ styles.list }>
            <p>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </p>


            <p>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </p>


            <p>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </p>


            <p>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </p>


            </div>
        </div>
        {/* Card Info */}

        {/* Pay Info */}
        <div className={styles.pay__info}>
                {/* <MarkPrice>${modal.precio}</MarkPrice> */}
                <p className='markPrice'>${ modal.precio }</p>

                <p><b>Envio GRATIS</b>. </p>
                <p>Llega: <b>dic 15 - 28</b></p>
                <p>Puede que los recibas después de Navidad</p>
                <div className={styles.pay__infoButtons}>
                {/* <SignInButton type='button' onClick={() => addToCart(modal)}>Agregar al Carrito</SignInButton>
                <SignUpButton type='button'>Comprar ahora</SignUpButton> */}
                <button
                className='btnPrimary'
                type='button' onClick={() => addToCart( modal )}>Agregar al Carrito</button>
                <button 
                className='btnSecondary'
                type='button'>Comprar ahora</button>
                </div>
                <Link className='linkRedirect' to='/'>Transacción segura</Link>
        </div>
        {/* Pay Info */}

    </div>
  )
}
