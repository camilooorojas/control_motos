import axios from 'axios';
import { useState } from 'react';
import { InfoEstudiante } from '../infoEstudiante/infoEstudiante';
import { RegistroMoto } from '../registroMoto/registroMoto';
import styles from './registroIngresoStyles.module.css';

function RegistroIngreso(props) {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [bikes, setBikes] = useState([]);
  const [newMoto, setNewMoto] = useState(false);

  const handleSearch = ({ target: { value } }) => setSearch(value);
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      callApi(search);
    }
  }
  const callApi = async (code) => {
    setNewMoto(false);
    setBikes([]);
    setStudents([]);
    console.log(students);
    if (code.length > 0) {
      const res = await axios.get(`http://localhost:4000/api/students/${code}`);
      setStudents(res.data);
    }

  }

  return (
    <div className={"d-flex flex-column justify-content-center align-items-center"}>
      <h2>Registro Ingreso</h2>
      <input autoFocus type="number" value={search} onKeyDown={handleClick} onChange={handleSearch} className={styles.inputName} placeholder="Digite código del estudiante..." />
      <button className={styles.findButton} onClick={() => { callApi(search) }}>Buscar</button>
      <div className={styles.infoData}>{students.length > 0 ? <>  <InfoEstudiante student={students[0]} setStudents={setStudents} bikes={bikes} setBikes={setBikes} setNewMoto={setNewMoto} />  </> : <h2>El estudiante no está registrado</h2>}</div>
    </div>
  );
}

export { RegistroIngreso }