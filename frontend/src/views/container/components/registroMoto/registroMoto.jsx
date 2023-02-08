import axios from 'axios';
import { useState } from 'react';
import styles from './registroMotoStyles.module.css'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function RegistroMoto(props) {
    const { student, setStudents } = props
    const [placa, setPlaca] = useState("");
    const handlePlaca = ({ target: { value } }) => setPlaca(value);
    const [idTarjeta, setIdTarjeta] = useState("");
    const handleIdTarjeta = ({ target: { value } }) => setIdTarjeta(value);
    const [modalOpen, setModalOpen] = useState(false);
    let addCredential = [];

    Modal.setAppElement('#root');

    const sendDataMoto = async (e) => {
        e.preventDefault();
        const body = {
            placa: placa,
            id_tarjeta: idTarjeta
        }
        const respC = await axios.post(`http://localhost:4000/api/credentials`, body);
        if (respC?.data?.message === "Credential saved") {
            const responseC = await axios.get(`http://localhost:4000/api/credentials/tarjeta/${idTarjeta}`);           
            addCredential.push(
                responseC.data[0]._id
            );
            console.log("Problema:", student);
            if(student?.credential?.length !== 0){
                student?.credential?.forEach(credential => {
                    addCredential.push(credential);
                });
                
            }
            const body ={
                credential: addCredential
            }
            console.log("student", student)
            if(student?.credential?.length > 0){
                await axios.put(`http://localhost:4000/api/students/${student?._id}`, body);    
            }
            else{
                await axios.put(`http://localhost:4000/api/students/${student[0]?._id}`, body);
            }
        }
        setModalOpen((prev) => !prev);
    }
    return (
        <div className={styles.container}>
            <h2>Registro Moto</h2>
            <div className={styles.prueba}></div>
            <form onSubmit={sendDataMoto} className={`d-flex flex-column align-items-center ${styles.form}`}>
                <div className={styles.formContainer}>
                    <h3>Placa:</h3>
                    <input required value={placa} onChange={handlePlaca} className={styles.formContainer_input} type="text" placeholder='Digite placa moto...' />
                    <h3>Id Tarjeta propiedad:</h3>
                    <input required value={idTarjeta} onChange={handleIdTarjeta} className={styles.formContainer_input} type="number" placeholder='Digite Id tarjeta de propiedad...' />
                </div>
                <button type='submit' className={styles.formContainer_button}>Registrar</button>

            </form>

            <Modal
                isOpen={modalOpen}
                contentLabel="Example Modal"
            >
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">                    
                        </div>
                        <div className="title">
                            <h1>Información de Registro</h1>
                        </div>
                        <div className="body">
                            <p>Registro exitoso!</p>
                        </div>
                        <div className="footer">                           
                            <Link to="/ingreso" onClick={() => {setModalOpen(false); setStudents([]);}}>
                                <button>Continuar</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );

}

export { RegistroMoto }