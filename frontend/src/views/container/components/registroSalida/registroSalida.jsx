
import { useState } from 'react';
import styles from './registroSalidaStyles.module.css';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function RegistroSalida() {
	const [search, setSearch] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [studentExist, setStudentExist] = useState(true);
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
			console.log("prueba de search: ",search);
			//const res = await axios.get(`http://localhost:4000/api/parking/${search}/1`);
			const res = await axios.get(`http://localhost:4000/api/parking`);
			console.log("base de datos aaaaaaaaaaaaaaaaaaaaaaaaaaaa", res);
			let validInside = res?.data;
			
			console.log("descubriendo",res);
			if (res?.data?.length > 0) {
				let flag = false;
				let temp;
				setStudentExist(true);
				validInside.forEach(element => {
					console.log("element...", element);
					if(element.codigo == search){
						flag = true;
						temp = element._id;
						console.log("actualice: ")
					}
				});
				if(flag){
					const response = await axios.put(`http://localhost:4000/api/parking/${temp}`, body);
					console.log("actualiza++++++++", temp)
					setModalOpen((prev) => !prev);
				}
				else{
					console.log("no existo")
					setStudentExist(false);
				}
			}
			else{
				setStudentExist(false);
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
			{(studentExist === false) && <p className={styles.notFound}>El estudiante no ha registrado ingreso.</p>}
			<button
				className={styles.findButton}
				onClick={() => { checkExit() }}>
				Registrar Salida
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
