import { WithoutProducts } from "../../../shared";

import styles from './Products.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Product as ProductInterface } from '../../../interfaces/products';
import { listAsync } from '../../../redux/actions/actionProducts';
import { Product } from "../../components";

export const Products = () => {

  const { products } = useSelector( ( store: any ) => store.products );
  const [selected, setSelected] = useState('otros');

  const dispatch = useDispatch();

  const datosFiltrados = products.filter( ( item: ProductInterface ) => item.categoria === selected );


  useEffect(() => {
    dispatch<any>( listAsync() );
  }, []);


  return (
    <div className={styles.products}>
    <div className={styles.products__content}>
        <h2>TRENDING PRODUCTS</h2>
        <div className={styles.products__contentFlex}>
          <h4 className={styles.products__option} onClick={() => setSelected('otros')}>OTROS</h4>
          <h4 className={styles.products__option} onClick={() => setSelected('camaras')}>CÁMARAS</h4>
          <h4 className={styles.products__option} onClick={() => setSelected('games')}>VIDEO JUEGOS</h4>
        </div>
    </div>

    
    {/*  */}
    { datosFiltrados.length === 0?
     <WithoutProducts /> :
     <div className={styles.products__container}>
       { datosFiltrados.map(( item: ProductInterface, index: number ) => (
        <Product
        key={ index } 
        item={ item } 
        />
       ))}
     </div>
    }
    {/*  */}
   
</div>
  )
}

export default Products;