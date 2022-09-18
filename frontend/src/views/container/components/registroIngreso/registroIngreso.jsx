import axios from 'axios';
import { useState } from 'react';
import styles from './registroIngresoStyles.module.css';

function RegistroIngreso(props) {
  
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = ({ target: { value } }) => setSearch(value);
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      callApi(search);
    }
  }
  const callApi = async (code) => {
    const res = await axios.get(`http://localhost:4000/api/students/${code}`);
    setStudents(res.data);
  }

  return (
    <div className={"d-flex flex-column justify-content-center align-items-center"}>
      <h2>Registro Ingreso</h2>
      <input type="text" value={search} onKeyDown={handleClick} onChange={handleSearch} className={styles.inputName} placeholder="Digite código del estudiante..." />
      <button className={styles.findButton} onClick={() => callApi(search) }>Buscar</button>
      <h2>{students[0]?.codigo}</h2>
    </div>
  );
}

export {RegistroIngreso}