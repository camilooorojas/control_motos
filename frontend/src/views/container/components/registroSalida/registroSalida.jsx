
import { useState } from 'react';
import styles from './registroSalidaStyles.module.css';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function RegistroSalida() {
	const [search, setSearch] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	let dateFinish;
	const handleSearch = ({ target: { value } }) => {
		setSearch(value);
	};

	const generateDates = () => {
		let date = new Date();
		dateFinish = date.toLocaleString();
	}

	const handleClick = (event) => {
		if (event.key === 'Enter') {
			setModalOpen((prev) => !prev);
		}
	};

	const checkExit = async () => {
		generateDates();
		const body = {
			inside: 0,
			fechaSalida: dateFinish
		}
		if (search.length > 0) {

			const res = await axios.get(`http://localhost:4000/api/parking/${search}/1`);
			if (res?.data?.length > 0) {
				await axios.put(`http://localhost:4000/api/parking/${res?.data[0]?._id}`, body);
				setModalOpen((prev) => !prev);
			}
		}
	}

	return (
		<div
			className={'d-flex flex-column justify-content-center align-items-center'}
		>
			<h2>Registro Salida</h2>
			<input
				autoFocus
				type="number"
				value={search}
				onKeyDown={handleClick}
				onChange={handleSearch}
				className={styles.inputName}
				placeholder="Digite código del estudiante..."
			/>
			<button
				className={styles.findButton}
				onClick={() => { checkExit() }}>
				Buscar
			</button>

			<Modal
				isOpen={modalOpen}
				contentLabel="Example Modal"
			>
				<div className="modalBackground">
					<div className="modalContainer">
						<div className="titleCloseBtn">
						</div>
						<div className="title">
							<h1>Información de Registro Salida</h1>
						</div>
						<div className="body">
							<p>Registro de retiro éxitoso!</p>
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

export { RegistroSalida };
