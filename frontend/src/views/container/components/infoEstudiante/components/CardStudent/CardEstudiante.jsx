import styles from "./CardEstudiante.module.css";
import { RiEdit2Fill, RiDeleteBin2Fill,  } from "react-icons/ri";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

function CardEstudiante(props) {
  const { plate, propertyId, addRegisterParking, idMotorcycle, idStudent, bikes, setBikes, code, studentId} = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setDeleteOpen] = useState(false);
  const [plateState, setPlateState] = useState(plate);
  const [cardId, setCardId] = useState(propertyId);
  const handlePlate = ({ target: { value } }) => setPlateState(value);
  const handleCardId = ({ target: { value } }) => setCardId(value);
  let search = 0;

  const loadDataMotorcycle = () => {
    search = cardId;
    setModalOpen((prev) => !prev);
  };

  const deleteMotorcycle = async () => {
    
    setDeleteOpen((prev) => !prev);
    let studentRes = await axios.get(`http://localhost:4000/api/students/${idStudent}`)
    if(studentRes.data[0] !== null){
      
      let cardBd = studentRes?.data[0]?.credential;
      let resp = cardBd.filter(item => item !== idMotorcycle);
      const body = {
        credential: resp
      }
      await axios.put(`http://localhost:4000/api/students/${studentId}`, body)
    }

    
    const res = await axios.delete(`http://localhost:4000/api/credentials/${idMotorcycle}`);
    if(res.status === 200){
      setBikes([]);
      code.forEach((element) => {
        loadCard(element);
      });
    }
  };

  const hideModalDelete = async () => {
    setDeleteOpen((prev) => !prev);
  };
  const editMotorcycle = async () => {
    const body = {
      placa: plateState,
      id_tarjeta: cardId
  }
  const res = await axios.get(`http://localhost:4000/api/credentials/tarjeta/${idMotorcycle}`);
  if(res !== null){
    const re = await axios.put(`http://localhost:4000/api/credentials/${idMotorcycle}`, body);
    setModalOpen((prev) => !prev);
    if(re.status === 200){
      setBikes([]);
      code.forEach((element) => {
        loadCard(element);
      });
    }
    
  }
    
  };

  const loadCard  = async (code) => {
    const reponse = await axios.get(
      `http://localhost:4000/api/credentials/${code}`
    );
    if(reponse.data !== null){
      setBikes((prev) => [...prev, reponse.data]);
    }
  }

  return (
    <div className={styles.card_student}>
      <div>
        <h3>Información de la moto</h3>
        <p>Placa: {plate}</p>
        <p>Id tarjeta propiedad: {propertyId}</p>
        <div className={styles.button_container}>
          <div className={styles.icons}>
            <div onClick={() => loadDataMotorcycle()}>
              <RiEdit2Fill />
            </div>
            <div onClick={() => hideModalDelete()}>
              <RiDeleteBin2Fill />
            </div>
          </div>
          <button onClick={() => addRegisterParking(plate, propertyId)}>
            Ingresa
          </button>
        </div>
      </div>

      <Modal isOpen={modalOpen}>
        <div className="modalBackground">
          <div className="modalContainerField modalContainer">
            <h2>Editar Moto</h2>

            <div className={styles.formContainer}>
              <div>  
                <h3>Placa:</h3>
                <input
                  required
                  value={plateState}
                  onChange={handlePlate}
                  className={styles.formContainer_input}
                  type="text"
                  placeholder="Digite placa moto..."
                  />
              </div>
              <div>
                <h3>Id Tarjeta prpiedad:</h3>
                <input
                  required
                  value={cardId}
                  onChange={handleCardId}
                  className={styles.formContainer_input}
                  type="number"
                  placeholder="Digite Id tarjeta de propiedad..."
                  />
              </div>
              <div className={styles.btn_action}>
                <button onClick={() => editMotorcycle()}>
                  Editar
                </button>
                <button onClick={() => deleteMotorcycle()}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={modalDeleteOpen}>
        <div className="modalBackground">
          <div className="modalContainerField modalContainer">
            <h2>Eliminar Moto</h2>

            <div className={styles.formContainer}>
              <p className={styles.txtConfirm}>
                ¿Desea eliminar esta moto?
              </p>
              <div className={styles.btn_action}>
                <button onClick={() => deleteMotorcycle()}>
                  Eliminar
                </button>
                <button onClick={() => hideModalDelete()}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export { CardEstudiante };
