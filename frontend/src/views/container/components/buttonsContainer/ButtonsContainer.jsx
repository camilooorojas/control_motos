import styles from './ButtonsContainer.module.css';

function ButtonsContainer(props) {
    const { onFilterCode, onClearFields } = props;

	return (
		<div className={styles.container}>
            <button
                className={styles.button}
                onClick={onFilterCode}
            >
                Buscar
            </button>
            <button
                className={styles.button}
                onClick={onClearFields}
            >
                Limpiar
            </button>
        </div>
	);
}

export { ButtonsContainer };
