
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={ styles.root }>
        <h2>Electrónicos</h2>
        <h2>Los Más Vendidos</h2>
        <h2>Televisión y Video</h2>
        <h2>Cómputo y Tabletas</h2>
        <h2>Audio y Equipos de Sonido</h2>
    </div>
  )
}