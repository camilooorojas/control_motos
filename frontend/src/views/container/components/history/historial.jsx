import styles from './historial.module.css';

function Historial() {
  return (
    <div className={styles.container}>
      <h2>Historial</h2>
      <table className="table">
        <thead className={styles.tableBlack}>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Codigo</th>
            <th>Cedula</th>
            <th>Id Tarjeta</th>
            <th>No. Horas</th>
          </tr>
        </thead>
        <tbody className={styles.tableWhite}>
          <tr>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          </tr>
          <tr>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          <td>contenido</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Historial }