import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Gallery.module.scss';
import { listAsync } from '../../../redux/actions/actionProducts';
import { selectedModal } from '../../../redux/actions/actionModal';

export const Gallery = ({ categoria }: any ) => {

  const dispatch = useDispatch();
  const { products } = useSelector( ( store: any ) => store.products );

  const enviarDatosModal = ( codigo: any ) => {
    dispatch<any>( selectedModal( codigo ) );
  }

    const filtrado = products.filter( ( item: any ) => item.categoria === categoria );
  
    useEffect(() => {
    dispatch<any>( listAsync() );
     }, []);

  return (
    <div className={ styles.root }>
        {
            filtrado.map(( card: any ) => (
        <div key={card.codigo} className={styles.gallery__box}>
            <img onClick={() => enviarDatosModal(card)} 
            className={styles.gallery__image} src={card.image__front} />
            <Link to='/'>{ card.nombre }</Link>
            {/* <MarkPrice>${card.precio}</MarkPrice> */}
            <h4>${ card.precio }</h4>
        </div>
            ))
        }
    </div>
  )
}
