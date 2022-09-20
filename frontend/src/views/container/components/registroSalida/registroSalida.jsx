import styles from './registroSalidaStyles.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function RegistroSalida() {
  return (
    <div className={styles.container}>
      <h2>Registro Salida</h2>
    </div>
  );
}

export {RegistroSalida}