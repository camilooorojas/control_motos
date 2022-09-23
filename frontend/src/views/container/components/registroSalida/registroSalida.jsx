
import { useState } from 'react';
import styles from './registroSalidaStyles.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function RegistroSalida() {
	const [search, setSearch] = useState('');
	const [modalOpen, setModalOpen] = useState(false);

	const handleSearch = ({ target: { value } }) => {
		setSearch(value);
	};

	const handleClick = (event) => {
		if (event.key === 'Enter') {
			setModalOpen((prev) => !prev);
		}
	};

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
				onClick={() => {
					setModalOpen((prev) => !prev);
				}}
			>
				Buscar
			</button>

			<Modal
                isOpen={modalOpen}
                contentLabel="Example Modal"
            >
				<div className="modalBackground">
					<div className="modalContainer">
						<div className="titleCloseBtn">
							<button onClick={() => setModalOpen(false)}>
								X
							</button>
						</div>
						<div className="title">
							<h1>Are You Sure You Want to Continue?</h1>
						</div>
						<div className="body">
							<p>The next page looks amazing. Hope you want to go there!</p>
						</div>
						<div className="footer">
							<button
								onClick={() => setModalOpen(false)}
								id="cancelBtn"
							>
								Cancel
							</button>
							<button>Continue</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export { RegistroSalida };
