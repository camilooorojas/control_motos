import axios from 'axios';
import { useState } from 'react';
import { FormularioEstudiante } from '../infoEstudiante/components/formularioEstudiante/formularioEstudiante';
import { RegistroMoto } from '../registroMoto/registroMoto';
import styles from './registroEstudianteStyles.module.css';
//import RegistroMoto from '../registroMoto/registroMoto'


function RegistroEstudiante() {
  const [name, setName] = useState("");  
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [register, setRegister] = useState(true);
  const [student, setStudent] = useState({});

  const updateFlag = () =>{
    setRegister(false);
  }

  const sendData = async (e) => {
    e.preventDefault();
    const body = {
      cedula: id,
      codigo: code,
      nombre: name,
      apellido: lastName
    }
    console.log("primero");
    const resp = await axios.get(`http://localhost:4000/api/students/${code}`);
    if (resp?.data?.length === 0) {
      
      setStudent(resp.data);
      const res = await axios.post(`http://localhost:4000/api/students`, body);
      const response = await axios.get(`http://localhost:4000/api/students/${code}`);
      setStudent(response.data);
      updateFlag();
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
      <>
      {register === true ? <FormularioEstudiante name={name} lastName={lastName} code={code} id={id} sendData={sendData}
      setName={setName} setLastName={setLastName} setCode={setCode} setId={setId}/>: <RegistroMoto student={student}/>}
      </>
    </div>

  );
}

export { RegistroEstudiante }