import { Gallery } from "../../components"

import styles from './GalleryContainer.module.scss';

export const GalleryContainer = () => {
  return (
    <div className={ styles.root }>
        <div>
        <h5 className={ styles.root__title }>Productos relacionados con este artículo</h5>
        <Gallery categoria='camaras' />
        </div>
        <div>
        <h5 className={ styles.root__title }>Inspirado por tu historial de búsqueda</h5>
        <Gallery categoria='games' />
        </div>
    </div>
  )
}