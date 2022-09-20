import axios from 'axios';
import { useState } from 'react';
import { InfoEstudiante } from '../infoEstudiante/infoEstudiante';
import styles from './registroSalidaStyles.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const stylesModal = {
	container: {
		top: '20%',
		left: '20%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
	modal: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00BCD4',
		height: 300,
		width: '80%',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
		marginTop: 80,
		marginLeft: 40,
	},
	text: {
		color: '#3f2949',
		marginTop: 10,
	},
	close: {
		backgroundColor: 'red',
	},
};

function RegistroSalida() {
	const [students, setStudents] = useState([]);
	const [search, setSearch] = useState('');
	const [bikes, setBikes] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	const handleSearch = ({ target: { value } }) => {
		setSearch(value);
	};

	const handleClick = (event) => {
		if (event.key === 'Enter') {
			callApi(search);
		}
	};

	const callApi = async (code) => {
		setBikes([]);
		setStudents([]);
		console.log(students);
		if (code.length > 0) {
			const res = await axios.get(`http://localhost:4000/api/students/${code}`);
			setStudents(res.data);
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
					callApi(search);
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
