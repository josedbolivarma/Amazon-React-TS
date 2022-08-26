import { Product as ProductInterface } from '../../../interfaces/products';

import styles from './Product.module.scss';
import { useState } from 'react';
import { Modal } from '../';

export const Product = ({ item }:any ) => {

  const [showSidebar, setShowSidebar] = useState<any>([]);
  const [modal, setModal] = useState(false);

  const editarModal = ( productItem: ProductInterface ) => {
    console.log('setShowModal', productItem.nombre);
    setModal(true);
    console.log('MODAL', modal);
    if(!modal) {
      setModal(true);
      setShowSidebar( productItem );
    } else {
      setModal(false);
      setShowSidebar([]);
    }
  }

  return (
    <div className={styles.product}>
        <img 
        onClick={() => editarModal(item) } 
        className={styles.product__image} 
        src={item.image__front}/>
        <div className={styles.product__content}>
        <h3 className={styles.product__title}>{item.nombre}</h3>
        <b>${ item.precio }</b>
        </div>
        {
          modal === true ? <Modal modalSidebar={showSidebar}  modalBoolean={modal}/> : ''
        }
    </div>
  )
}

export default Product