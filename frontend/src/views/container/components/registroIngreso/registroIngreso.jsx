import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './registroIngresoStyles.module.css';

function RegistroIngreso(props) {
  
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const petition = async () => {
      console.log("imprime")
      
      const res = await axios.get(`http://localhost:4000/api/students`);
      
      setStudents(res.data);
    };
    petition();
  }, []);
  console.log(students);
  return (
    <div className={"d-flex flex-column justify-content-center align-items-center"}>
      <h2>Registro Ingreso</h2>
      <input type="text" className={styles.inputName} placeholder="Digite código del estudiante..." />
      <button className={styles.findButton}>Buscar</button>
    </div>
  );
}

export {RegistroIngreso}