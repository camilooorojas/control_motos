import styles from "./CardEstudiante.module.css";
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

function CardEstudiante(props) {
  const { plate, propertyId, addRegisterParking } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [plateState, setPlateState] = useState(plate);
  const [cardId, setCardId] = useState(propertyId);
  const handlePlate = ({ target: { value } }) => setPlateState(value);
  const handleCardId = ({ target: { value } }) => setCardId(value);
  let search = 0;

  const loadDataMotorcycle = () => {
    search = cardId;
    setModalOpen((prev) => !prev);
    console.log("edita", plate, " ", propertyId);
  };

  const deleteMotorcycle = () => {
    setModalOpen((prev) => !prev);
    console.log("elimina", plate, " ", propertyId);
  };

  const editMotorcycle = async () => {
    const body = {
      placa: plateState,
      id_tarjeta: cardId
  }
console.log("tiene", search)
  const res = await axios.get(`http://localhost:4000/api/credentials/tarjeta/${search}`);
  console.log("devuelvo: ",res.data[0])
  if(res !== null){
    await axios.put(`http://localhost:4000/api/credentials/${res._id}`, body);

    console.log("Estamos editando", body);
  }
    
  };

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
            <div onClick={() => deleteMotorcycle()}>
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
    </div>
  );
}

export { CardEstudiante };
