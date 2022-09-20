import styles from './formularioEstudianteStyles.module.css';


function FormularioEstudiante(props) {
const {name, lastName, code, id, sendData, setName, setLastName, setCode, setId} = props

const handleName = ({ target: { value } }) => setName(value);
const handleLastName = ({ target: { value } }) => setLastName(value);
const handleCode = ({ target: { value } }) => setCode(value);
const handleId = ({ target: { value } }) => setId(value);

  return (
    <div className={styles.container}>
      <h2>Registro Estudiante</h2>
      <form onSubmit={sendData} className={`d-flex flex-column align-items-center ${styles.form}`}>
        <div className={styles.formContainer}>
          <h3>Nombre:</h3>
          <input required value={name} onChange={handleName} className={styles.formContainer_input} type="text" placeholder='Digite nombre del estudiante...' />
          <h3>Apellido:</h3>
          <input required value={lastName} onChange={handleLastName} className={styles.formContainer_input} type="text" placeholder='Digite apellido del estudiante...' />
          <h3>Código:</h3>
          <input required value={code} onChange={handleCode} className={styles.formContainer_input} type="number" placeholder='Digite código del estudiante...' />
          <h3>Cédula:</h3>
          <input required value={id} onChange={handleId} className={styles.formContainer_input} type="number" placeholder='Digite cédula del estudiante...' />
        </div>
        <button type='submit' className={styles.formContainer_button}>Continuar</button>
      </form>
    </div>
  );
}

export { FormularioEstudiante }