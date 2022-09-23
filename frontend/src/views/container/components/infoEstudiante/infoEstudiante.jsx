import styles from './infoEstudianteStyles.module.css';
import { CardEstudiante } from './components/CardStudent/CardEstudiante';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RegistroMoto } from '../registroMoto/registroMoto';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function InfoEstudiante(props) {
  const { student, setStudents, bikes, setBikes } = props;
  const [newMoto, setNewMoto] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const loadBikeInfo = async (code) => {
      const res = await axios.get(`http://localhost:4000/api/credentials/${code}`);
      setBikes(prev => [...prev, res.data]);
    }
    setBikes([]);
    student?.credential.forEach(element => {
      loadBikeInfo(element);
    });
  }, [student, setBikes])

  const changeState = () => {
    console.log("Llega a cambiar")
    setNewMoto(true);
  }

  const addRegisterParking = async (plate, propertyId) => {
    const body = {
      cedula: student?.cedula,
      codigo: student?.codigo,
      nombre: student?.nombre,
      apellido: student?.apellido,
      placa: plate,
      id_tarjeta: propertyId,
      inside: 1
    }
    const response = await axios.get(`http://localhost:4000/api/parking/${propertyId}`);
    console.log("Formato", response);
    let flag = 0;
    response.data.forEach( (element)=>{
      if(element.inside === 1){
        setMensaje("La moto ya se encuentra registrada!");
        flag = 1;
      }
    });

    if(flag === 0){
      const res = await axios.post(`http://localhost:4000/api/parking`, body);
      setMensaje("Moto Registrada Exitosamente!");
    }
    console.log("mensaje: ", mensaje)
    setModalOpen((prev) => !prev);
  }

  const closedModal = () => {
    setModalOpen(false)
    setStudents([]);
  }

  return (
    <div className={styles.container}>
      <h2>Datos del estudiante</h2>
      <div className={styles.bg_white}>
        <div className={styles.student_data}>
          <div>Nombre: {student?.nombre}</div>
          <div>Apellido: {student?.apellido}</div>
          <div>Cédula: {student?.cedula}</div>
          <div>Código: {student?.codigo}</div>
        </div>
        {newMoto === false ?
          <div className={styles.card_content}>
            {bikes?.map((item, index) => (
              <CardEstudiante key={index}
                propertyId={item.id_tarjeta}
                plate={item.placa}
                addRegisterParking={addRegisterParking}
              />
            ))}
          </div>
          :
          <RegistroMoto student={student} />
        }

        <div className={styles.button_container}>
          <button onClick={() => changeState()}>
            Registrar nueva moto
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
      >
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="title">
              <h1>Información de Registro Ingreso</h1>
            </div>
            <div className="body">
              <p>{mensaje}</p>
            </div>
            <div className="footer">
              <button onClick={() => closedModal()}>Continuar</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export { InfoEstudiante }