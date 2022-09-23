import styles from './CardEstudiante.module.css';

function CardEstudiante(props) {
    const { plate, propertyId, addRegisterParking} = props;

    return (
        <div className={ styles.card_student }>
            <h3>Información de la moto</h3>
            <p>Placa: { plate }</p>
            <p>Id tarjeta propiedad: { propertyId }</p>
            <div className={ styles.button_container }>
                <button onClick={()=>addRegisterParking(plate, propertyId)}>Ingresa</button>
            </div>           
        </div>
    )
}

export { CardEstudiante };