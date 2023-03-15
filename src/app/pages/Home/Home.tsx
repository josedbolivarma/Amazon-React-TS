import { CommentsContainer, GalleryContainer, DetailsContainer } from "../../containers";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';

export const Home = () => {

  const { modal } = useSelector( ( store: any ) => store.modal );

  const [product, setProduct] = useState<any>({});
  console.log({product});

  console.log({modal});
  useEffect(() => {
    window.scrollTo(0, 0);
    modal && setProduct(modal);
  }, [ modal ]);

  return (
    <section>
      {
        (product.length === 0 || !product)? (
          <div className={ styles.container }>
            <img src="https://res.cloudinary.com/duzncuogi/image/upload/v1678278935/amazonas/cart_banner_hviupj.jpg" alt="Banner Product Empty" />
          </div>
        ) : (
          <DetailsContainer />
        )
      }
      <GalleryContainer />
      {
        (product.length === 0 || !product)? null : (
          <CommentsContainer product={ product }/>
        )
      }
    </section>
  )
}

export default Home;