import styles from "./CardEstudiante.module.css";
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
function CardEstudiante(props) {
    const { plate, propertyId, addRegisterParking } = props;

    return (
        <div className={styles.card_student}>
            <div>
                <h3>Información de la moto</h3>
                <p>Placa: {plate}</p>
                <p>Id tarjeta propiedad: {propertyId}</p>
                <div className={styles.button_container}>
                    <div className={styles.icons}>
                        <RiEdit2Fill />
                        <RiDeleteBin2Fill />
                    </div>
                    <button
                        onClick={() => addRegisterParking(plate, propertyId)}>
                        Ingresa
                    </button>
                </div>
            </div>
        </div>
    );
}

export { CardEstudiante };
