import axios from 'axios';
import { useState } from 'react';
import { FormularioEstudiante } from '../infoEstudiante/components/formularioEstudiante/formularioEstudiante';
import { RegistroMoto } from '../registroMoto/registroMoto';
import styles from './registroEstudianteStyles.module.css';
import Modal from 'react-modal';


function RegistroEstudiante() {
  const [name, setName] = useState("");  
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [register, setRegister] = useState(true);
  const [student, setStudent] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");

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
    const resp = await axios.get(`http://localhost:4000/api/students/${code}`);
    if (resp?.data?.length === 0) {
      
      setStudent(resp.data);
      await axios.post(`http://localhost:4000/api/students`, body);
      const response = await axios.get(`http://localhost:4000/api/students/${code}`);
      setStudent(response.data);
      updateFlag();
    } else {      
      setMensaje("El estudiante ya existe!");
      setModalOpen((prev) => !prev);
    }

  }

  return (
    <div className={styles.container}>
      <>
      {register === true ? <FormularioEstudiante name={name} lastName={lastName} code={code} id={id} sendData={sendData}
      setName={setName} setLastName={setLastName} setCode={setCode} setId={setId}/>: <RegistroMoto student={student}/>}
      </>

      <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
      >
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="title">
              <h1>Información de Registro Estudiante</h1>
            </div>
            <div className="body">
              <p>{mensaje}</p>
            </div>
            <div className="footer">
              <button onClick={() => setModalOpen(false)}>Continuar</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>

  );
}

export { RegistroEstudiante }