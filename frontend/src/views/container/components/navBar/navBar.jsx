import styles from './navBarStyles.module.css';
import logo from './../../../../assets/logo.svg';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className={`d-flex align-items-center justify-content-between ${styles.navBar} `}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div>
      <ul className={styles.menu__elements}>
        <li>
            {/* Links to the diferent routes define with react router in the container component */}
            <Link to="/ingreso">Ingreso</Link>
        </li>
        <li>
            <Link to="/salida">Salida</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
        <li>
          <Link to="/historial">Historial</Link>
        </li>
        <li>
          <Link to="/motos">Motos ingresadas</Link>
        </li>
      </ul>
      </div>
    </div>
  );
}
export {NavBar}