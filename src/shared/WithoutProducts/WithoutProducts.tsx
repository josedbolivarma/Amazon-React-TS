import { BiErrorCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import styles from './WithoutProducts.module.scss';

export const WithoutProducts = () => {
  const navigate = useNavigate();

  return (
    <div className={ styles.customAlert }>
        <BiErrorCircle size={ 65 } />
        <h2 className='upperTitle'>LO SENTIMOS</h2>
        <h3><b>No tenemos productos agregados a está categoría</b></h3>
        <button 
        className='btnSecondary'
        onClick={() => navigate('/order')}>
          Agrega un producto
        </button>
    </div>
  )
}
