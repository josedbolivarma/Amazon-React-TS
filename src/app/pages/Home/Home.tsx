import { CommentsContainer, GalleryContainer, DetailsContainer } from "../../containers";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const Home = () => {

  const { modal } = useSelector( ( store: any ) => store.modal );

  const [product, setProduct] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
    modal && setProduct(modal);
  }, [ modal ]);

  return (
    <section>
      <DetailsContainer />
      <GalleryContainer />
      <CommentsContainer product={ product }/>
    </section>
  )
}

export default Home;