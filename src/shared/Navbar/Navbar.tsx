import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={ styles.root }>
        <div className={ styles.navbar__box }>
            {/* <DehazeIcon /> */}
            <span>List</span>
        </div>
        <div className={ styles.navbar__box }>
            <span>Tarjetas de regalo</span>
        </div>
        <div className={ styles.navbar__box }>
            <span>Prime</span>
        </div>
        <div className={ styles.navbar__box }>
            <span>Los Más Vendidos</span>
        </div>
        <div className={ styles.navbar__box }>
            <span>AmazonBasics</span>
        </div>
        <div className={ styles.navbar__box }>
            <span>Cómputo y Tabletas</span>
        </div>
        <div className={ styles.navbar__box }>
            <span>Los Más Regalados</span>
        </div>
    </div>
  )
}
