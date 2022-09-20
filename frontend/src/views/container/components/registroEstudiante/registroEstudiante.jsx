import axios from 'axios';
import { useState } from 'react';
import styles from './registroEstudianteStyles.module.css';
//import RegistroMoto from '../registroMoto/registroMoto'


function RegistroEstudiante() {
  const [name, setName] = useState("");
  const handleName = ({ target: { value } }) => setName(value);
  const [lastName, setLastName] = useState("");
  const handleLastName = ({ target: { value } }) => setLastName(value);
  const [code, setCode] = useState("");
  const handleCode = ({ target: { value } }) => setCode(value);
  const [id, setId] = useState("");
  const handleId = ({ target: { value } }) => setId(value);
  const sendData = async (e) => {
    e.preventDefault();
    const body = {
      cedula: id,
      codigo: code,
      nombre: name,
      apellido: lastName
    }
    const resp = await axios.get(`http://localhost:4000/api/students/${code}`);
    if (resp.data.length === 0) {
      const res = await axios.post(`http://localhost:4000/api/students`, body);
    } else {
      console.log("Ya existe");
    }
    
  }
  /* const loadStudentInfo = async (code) => {
    
    console.log("info de res",res.data);
    setUser(res.data);
  } */
  

  return (
    <div className={styles.container}>
      <h2>Registro Estudiante</h2>
      <form onSubmit={sendData} className={`d-flex flex-column align-items-center ${styles.form}`}>
        <div className={styles.formContainer}>
          <h3>Nombre:</h3>
          <input required value={name} onChange={ handleName } className={styles.formContainer_input} type="text" placeholder='Digite nombre del estudiante...' />
          <h3>Apellido:</h3>
          <input required value={lastName} onChange={ handleLastName } className={styles.formContainer_input} type="text" placeholder='Digite apellido del estudiante...' />
          <h3>Código:</h3>
          <input required value={code} onChange={ handleCode } className={styles.formContainer_input} type="number" placeholder='Digite código del estudiante...' />
          <h3>Cédula:</h3>
          <input required value={id} onChange={ handleId } className={styles.formContainer_input} type="number" placeholder='Digite cédula del estudiante...' />
        </div>
        <button type='submit' className={styles.formContainer_button}>Continuar</button>
      </form>
    </div>
  );
}

export {RegistroEstudiante}