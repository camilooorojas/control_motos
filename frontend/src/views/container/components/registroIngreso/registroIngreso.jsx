import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { InfoEstudiante } from '../infoEstudiante/infoEstudiante';
import styles from './registroIngresoStyles.module.css';

function RegistroIngreso(props) {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [bikes, setBikes] = useState([]);

  const handleSearch = ({ target: { value } }) => setSearch(value);
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      callApi(search);
    }
  }
  const callApi = async (code) => {
    setBikes([]);
    setStudents([]);
    console.log(students);
    if (code.length > 0) {
      const res = await axios.get(`http://localhost:4000/api/students/${code}`);
      setStudents(res.data);
    }
  }

  return (
    <div>
      <div className={"d-flex flex-column justify-content-center align-items-center box-input"}> 
      {students.length > 0 ? <>  <InfoEstudiante student={students[0]} setStudents={setStudents} bikes={bikes} setBikes={setBikes} setSearch={setSearch} />  </> : <><h2>Registro Ingreso</h2>
      <input autoFocus type="number" value={search} onKeyDown={handleClick} onChange={handleSearch} className={styles.inputName} placeholder="Digite código del estudiante..." />
      <button className={styles.findButton} onClick={() => { callApi(search) }}>Buscar</button></>}      
      </div>
    </div>
  );
}

export { RegistroIngreso }