import styles from './CardEstudiante.module.css';

function CardEstudiante(props) {
    const { plate, propertyId } = props;

    return (
        <div className={ styles.card_student }>
            <h3>Información de la moto</h3>
            <p>Placa: { plate }</p>
            <p>Id tarjeta propiedad: { propertyId }</p>
            <div className={ styles.button_container }>
                <button>Ingresa</button>
            </div>
        </div>
    )
}

export { CardEstudiante };